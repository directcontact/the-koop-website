import App from 'next/app';
import React from 'react';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
//import withRedux from 'next-redux-wrapper';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
//import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../../public/static/css/styles.css';
import 'normalize.css/normalize.css';

import Nav from '../components/nav';
import Header from '../components/header';
//import store from '../redux/store';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});
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
    if (path.includes('admin')) {
      const params = path.split('/');
      path = `/${params[params.length - 1]}`;
      console.log(path);
    }

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
      case '/login':
        mainClass = 'login__page';
        break;
      default:
        mainClass = 'main__page';
        break;
    }

    return mainClass;
  }

  renderNavComponents() {
    return (
      <>
        <Nav />
      </>
    );
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const mainClass = this.getMainClass(router.pathname);

    return (
      <>
        {
          //<Provider store={store}>
        }
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence exitBeforeEnter>
            <Header />

            {router.pathname.includes('admin')
              ? null
              : this.renderNavComponents()}

            <motion.div
              key={mainClass}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="page-cover"
            >
              <div className={`${mainClass}`}>
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
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimateSharedLayout>
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
