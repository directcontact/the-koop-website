import App from 'next/app';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/static/css/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
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
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
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
