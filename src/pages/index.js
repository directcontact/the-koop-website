import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { chunk } from 'lodash';

import MenuItem from '../components/MenuItem';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  static async getInitialProps(ctx) {
    //const res = await fetch('http://localhost:3000/api/menu/items');
    //const items = await res.json();
    const items = [
      {
        name: 'Garlic Chicken',
        src: '/static/images/food-image1.jpg',
      },
      {
        name: 'Garlic Chicken',
        src: '/static/images/food-image1.jpg',
      },
      {
        name: 'Garlic Chicken',
        src: '/static/images/food-image1.jpg',
      },
      {
        name: 'Garlic Chicken',
        src: '/static/images/food-image1.jpg',
      },
      {
        name: 'Garlic Chicken',
        src: '/static/images/food-image1.jpg',
      },
    ];
    const state = ctx.store.getState();
    return {
      items,
      ...state,
    };
  }

  renderMenu(button) {
    const menuItems = this.props.items;
    const sections = chunk(menuItems, 3);
    const divVariant = {
      active: {
        opacity: 1,
      },
      inactive: {
        opacity: 0,
      },
    };
    return (
      <AnimatePresence>
        <motion.div
          className="menu"
          variants={divVariant}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.3,
            ease: 'easeInOut',
            duration: 0.3,
          }}
          animate={button.active ? 'active' : 'inactive'}
        >
          <div className="menu__container">
            <div className="menu__list">
              {sections.map((divs, idx) => (
                <motion.div
                  key={idx}
                  variants={divVariant}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.3,
                    ease: 'easeInOut',
                    duration: 0.3,
                  }}
                  animate={button.active ? 'active' : 'inactive'}
                  className="row mb-3 mt-3"
                >
                  {divs.map((item, idx) => (
                    <MenuItem item={item} idx={idx} />
                  ))}
                  ;
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  renderHomeScreen(button) {
    const divVariant = {
      active: {
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        y: -100,
        opacity: 0,
      },
      inactive: {
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        y: 0,
        opacity: 1,
      },
    };

    const aVariant = {
      active: {
        display: 'inline-block',
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        y: -225,
      },
      inactive: {
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        y: 0,
      },
    };
    return (
      <>
        <div className="main">
          <motion.div
            variants={divVariant}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            animate={button.active ? 'active' : 'inactive'}
          >
            <h1 className="main__header">THE KOOP</h1>
            <h2 className="main__subheader">
              KOREAN CHICKEN | KOREAN CUISINE | JOKBAL
            </h2>
          </motion.div>
          <motion.a
            variants={aVariant}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            animate={button.active ? 'active' : 'inactive'}
            className="main__btn"
          >
            ORDER
          </motion.a>
        </div>
        {button.active ? this.renderMenu(button) : null}
      </>
    );
  }

  render() {
    const { button } = this.props;
    return <Layout>{this.renderHomeScreen(button)}</Layout>;
  }
}
