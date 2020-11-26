import App from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/static/css/styles.css';
import 'normalize.css/normalize.css';

import Nav from '../components/Nav';
import Header from '../components/Header';
import store from '../../redux/store';

class MyApp extends App {
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
      <>
        <Provider store={store}>
          <Header />
          <div className="page-cover page-main">
            <Nav />
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                transition={{ duration: 0.3 }}
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
                className="max-height"
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </div>
        </Provider>
      </>
    );
  }
}

export function reportWebVitals(metric) {
  if (metric.label === 'custom') {
    console.log(metric);
  }
}

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
