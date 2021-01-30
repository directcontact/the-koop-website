const express = require('express');
const next = require('next');
const helmet = require('helmet');
const dynamo = require('dynamodb');
require('dotenv').config();

const { emailSender } = require('./util/email');
const { InitDB, AddDummyOrders, AddDummmyUser } = require('./util/init-dynamo');
const { UserTable } = require('./models/user');
const { OrderTable } = require('./models/order');

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();

const API_KEY = process.env.API_KEY;
const AWSDB_ACCESS_KEY = process.env.AWSDB_ACCESS_KEY;
const AWSDB_SECRET_KEY = process.env.AWSDB_SECRET_KEY;

dynamo.AWS.config.update({
  accessKeyId: AWSDB_ACCESS_KEY,
  secretAccessKey: AWSDB_SECRET_KEY,
  region: 'us-east-1',
});

dynamo.log.level('info');
server
  .prepare()
  .then(() => {
    const app = express();

    const port = process.env.PORT || 3000;

    if (dev) {
      const morgan = require('morgan');
      app.use(morgan('common'));
    }

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );

    app.post('/api/auth', async (req, res) => {
      const username = req.body.username;
      const password = req.body.password;

      const User = UserTable(dynamo);
      const auth = await User.get(username);
      const userPass = auth.get('password');

      if (auth) {
        if (password === userPass) {
          res.sendStatus(200);
        } else {
          res.sendStatus(403);
        }
      }
    });

    app.post('/api/email', (req, res) => {
      const email = req.body.value;
      emailSender(email);
      res.sendStatus(200);
    });

    app.get('/api/orders', (req, res) => {
      const { key } = req.query;
      if (key === API_KEY) {
        const Order = OrderTable(dynamo);
        Order.scan().exec((err, data) => {
          if (err) {
            res.sendStatus(500);
          } else {
            res.send(data.Items.map((model) => model.attrs));
          }
        });
      } else {
        res.sendStatus(403);
      }
    });

    app.get('/test/models', async (req, res) => {
      //await AddDummmyUser(dynamo);
      await AddDummyOrders(dynamo);
      res.send('Done!');
    });

    app.get('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(port, () => {
      console.log(`listening on port ${port}!`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
