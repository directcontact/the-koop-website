import App from 'next/app';
import React from 'react';
//import withRedux from 'next-redux-wrapper';
import { motion, AnimatePresence } from 'framer-motion';
//import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../../public/static/css/styles.css';
import 'normalize.css/normalize.css';

import Nav from '../components/nav';
import Header from '../components/Header';
//import store from '../redux/store';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  getMainClass(path) {
    let mainClass = '';

    switch (path) {
      case '/':
        mainClass = 'main__page';
        break;
      case '/menu':
        mainClass = 'menu__page';
        break;
      case '/location':
        mainClass = 'location__page';
        break;
      case '/story':
        mainClass = 'story__page';
        break;
      case '/catering':
        mainClass = 'catering__page';
        break;
      default:
        mainClass = 'main__page';
        break;
    }

    return mainClass;
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const mainClass = this.getMainClass(router.pathname);

    return (
      <>
        {
          //<Provider store={store}>
        }
        <Header />

        <div className="page-cover">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${mainClass}`}
          >
            <Nav />
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={mainClass}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-height"
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        {
          //</Provider>
        }
      </>
    );
  }
}

export function reportWebVitals(metric) {
  if (metric.label === 'custom') {
    console.log(metric);
  }
}

// const makeStore = () => store;

//export default withRedux(makeStore)(MyApp);
export default MyApp;
