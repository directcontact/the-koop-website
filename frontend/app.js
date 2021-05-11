const express = require('express');
const next = require('next');
const helmet = require('helmet');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();

server
  .prepare()
  .then(() => {
    const app = express();

    const port = process.env.PORT || 80;

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
