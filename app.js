const express = require('express');
const next = require('next');
const helmet = require('helmet');
const dynamo = require('dynamodb');
const uuid = require('uuid');
require('dotenv').config();

const Stripe = require('stripe');
const CHECKOUT_DOMAIN = 'http://localhost:3000/checkout';

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

    app.post('/process/stripe', async (req, res) => {
      const cart = req.body.cart;
      const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
      // 1) Get the current checkout order
      const orderId = uuid.v4();
      const lineItems = cart.map((item) => {
        // if (item.name.includes('chicken')) {
        //   if (item.name.includes('whole')) {
        //     const description = item.name.
        //     const name =
        //   }
        // }
        return {
          name: `${item.item}`,
          description: `${item.size} ${item.item} ${item.type
            .charAt(0)
            .toUpperCase()}`,
          amount: item.price * 100,
          currency: 'usd',
          quantity: item.quant,
        };
      });
      console.log(lineItems);
      const url =
        process.env.NODE_ENV !== 'production'
          ? process.env.DEV_URL
          : process.env.PROD_URL;
      // 2) Create checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        success_url: url,
        cancel_url: url,
        // customer_email: req.user.email,
        client_reference_id: orderId,
        line_items: lineItems,
      });

      stripe.redirectToCheckout({ sessionId: session.id });
    });

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
    // app.post('/create-checkout-session', async (req, res) => {
    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items: [
    //       {
    //         price_data: {
    //           currency: 'usd',
    //           product_data: {
    //              name: 'Whole Chicken (soy garlic)'
    //           },
    //           unit_amount: 2095
    //         },
    //         quantity: 1
    //       },
    //       {
    //         price_data: {
    //           currency: 'usd',
    //           product_data: {
    //              name: 'kimchi pajeon'
    //           },
    //           unit_amount: 1095
    //         },
    //         quantity: 1
    //       }
    //     ],
    //     mode: 'payment',
    //     success_url: `${CHECKOUT_DOMAIN}?success=true`,
    //     cancel_url: `${CHECKOUT_DOMAIN}?canceled=true`
    //   })

    // res.json({ id: session.id })
    // })

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
