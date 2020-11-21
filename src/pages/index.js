import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default class IndexPage extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:3000/api/menu/items');
    const items = await res.json();
    const state = ctx.store.getState();
    return {
      items,
      ...state,
    };
  }

  renderMenu() {
    const menuItems = this.props.items;
    const jsx = '';
    if (menuItems) {
      jsx = menuItems.map((item, idx) => {
        return (
          <div className="row mb-3 mt-3" key={idx}>
            <MenuItem item={item} />
          </div>
        );
      });
    } else {
      jsx = <div>Loading</div>;
    }
    return (
      <Layout>
        <div className="menu__container">
          <div className="menu__list">{jsx}</div>
        </div>
      </Layout>
    );
  }

  renderHomeScreen() {}

  render() {
    const { button } = this.props;
    return (
      <Layout>
        <div className="main">
          <motion.div
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            animate={{
              boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
              y: button.active ? -100 : 0,
              opacity: button.active ? 0 : 1,
            }}
          >
            <h1 className="main__header">THE KOOP</h1>
            <h2 className="main__subheader">
              KOREAN CHICKEN | KOREAN CUISINE | JOKBAL
            </h2>
          </motion.div>
          <motion.a
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            animate={{
              boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
              y: button.active ? -250 : 0,
            }}
            className="main__btn"
          >
            ORDER
          </motion.a>
        </div>
      </Layout>
    );
  }
}
