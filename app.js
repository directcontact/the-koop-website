const express = require('express');
const next = require('next');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const { emailSender } = require('./util/email');

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();

const API_KEY = process.env.API_KEY;

server
  .prepare()
  .then(() => {
    const app = express();

    const port = process.env.PORT || 3000;

    if (dev) {
      const morgan = require('morgan');
      app.use(morgan('common'));
    }

    app.use(bodyParser.json());
    app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );

    const options = {
      useNewUrlParser: true,
      user: process.env.MONGO_ID,
      pass: process.env.MONGO_PASS,
    };

    // mongoose.connect(process.env.MONGO_URL, options);

    // Connected handler
    mongoose.connection.on('connected', function (err) {
      console.log('Connected to DB');
    });

    // Error handler
    mongoose.connection.on('error', function (err) {
      console.log(err);
    });

    app.post('/api/auth', (req, res) => {
      const username = req.body.username;
      const password = req.body.password;

      if (username === 'test' && password === 'test') {
        res.sendStatus(200);
      } else {
        res.sendStatus(403);
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
        res.send([
          {
            id: 'dsafa',
            name: 'Tom',
            pickup: true,
            notes: 'Extra spicy',
            items: [
              {
                name: 'spicy soy garlic small whole chicken',
                quantity: 1,
                price: 9.95,
              },
              {
                name: 'extra spicy large wings chicken',
                quantity: 1,
                price: 20.95,
              },
            ],
          },
          {
            id: 'khtyt',
            name: 'Sharon',
            pickup: true,
            notes: '',
            items: [
              {
                name: 'daegi bulgogi',
                quantity: 2,
                price: 12.95,
              },
            ],
          },
          {
            id: 'tryuyuyi',
            name: 'Arnold',
            pickup: true,
            notes: 'Extra spicy',
            items: [
              {
                name: 'budae jigae',
                quantity: 1,
                price: 11.95,
              },
            ],
          },
          {
            id: 'ncvmvn',
            name: 'James',
            pickup: true,
            notes: '',
            items: [
              {
                name: 'spicy trotter',
                quantity: 1,
                price: 29.0,
              },
              {
                name: 'gangjeong',
                quantity: 1,
                price: 22.95,
              },
              {
                name: 'original trotter',
                quantity: 2,
                price: 27.0,
              },
              {
                name: 'mackerel combo',
                quantity: 3,
                price: 10.95,
              },
            ],
          },
        ]);
      } else {
        res.sendStatus(403);
      }
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
