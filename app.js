const express = require('express');
const next = require('next');
const helmet = require('helmet');
const session = require('express-session');
const bodyParser = require('body-parser');
const cryptoRandomString = require('crypto-random-string');

const { emailSender } = require('./util/email');

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();

server
  .prepare()
  .then(() => {
    const app = express();

    const port = process.env.PORT || 3000;

    const session_secret = cryptoRandomString({ length: 10, type: 'base64' });

    if (dev) {
      const morgan = require('morgan');
      app.use(morgan('common'));
    }

    app.use(bodyParser.json());
    app.use(
      session({
        secret: session_secret,
        resave: false,
        saveUninitialized: true,
      })
    );
    app.use(
      helmet({
        contentSecurityPolicy: false,
      })
    );

    app.get('/api/menu/chicken/items', (req, res) => {
      res.send([
        {
          name: 'soy garlic',
          type: 'chicken',
          src: '/static/images/soygarlic-1.jpg',
        },
        {
          name: 'spicy soy garlic',
          type: 'chicken',
          src: '/static/images/soygarlic-5.jpg',
        },
        {
          name: 'extra spicy',
          type: 'chicken',
          src: '/static/images/sweet_spicy-2.jpg',
        },
        {
          name: 'sweet & spicy',
          type: 'chicken',
          src: '/static/images/sweet_spicy-3.jpg',
        },
        {
          name: 'honey garlic',
          type: 'chicken',
          src: '/static/images/honeygarlic-4.jpg',
        },
        {
          name: 'mild',
          type: 'chicken',
          src: '/static/images/mild-5.jpg',
        },
      ]);
    });

    app.get('/api/menu/side/items', (req, res) => {
      res.send([
        {
          name: 'white rice',
          type: 'side',
          src: '',
        },
        {
          name: 'pickled radish',
          type: 'side',
          src: '',
        },
      ]);
      const sideItems = [
        {
          name: 'white rice',
          type: 'side',
          src: '',
        },
        {
          name: 'pickled radish',
          type: 'side',
          src: '',
        },
      ];

      const prices = [
        {
          chicken: {
            whole: {
              small: {
                price: 9.95,
                size: '7-8',
              },
              large: {
                price: 18.95,
                size: '14-16',
              },
            },
            wings: {
              small: {
                price: 11.95,
                size: '8',
              },
              large: {
                price: 20.95,
                size: '16',
              },
            },
            drumsticks: {
              small: {
                price: 11.95,
                size: '5',
              },
              large: {
                price: 20.95,
                size: '10',
              },
            },
            boneless: {
              small: {
                price: 9.95,
                size: '450g',
              },
              large: {
                price: 18.95,
                size: '900g',
              },
            },
          },
        },
      ];
    });

    app.post('/api/email', (req, res) => {
      const email = req.body.value;
      emailSender(email);
      res.sendStatus(200);
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
