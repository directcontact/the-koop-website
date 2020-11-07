import App from 'next/app';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/styles.css';
import { motion, AnimatePresence } from 'framer-motion';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          transition={{ duration: 1 }}
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              backgroundColor: 'white',
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    );
  }
}
