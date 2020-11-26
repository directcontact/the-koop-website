import { AnimatePresence, motion } from 'framer-motion';
import { chunk } from '../../util/helper';

import MenuItem from '../components/MenuItem';

export default class IndexPage extends React.Component {
  constructor() {
    super();

    // this.handleEmailButton = this.handleEmailButton.bind(this);
  }

  static async getInitialProps(ctx) {
    //const res = await fetch('http://localhost:3000/api/menu/items');
    //const items = await res.json();
    const items = [
      {
        name: 'SOY GARLIC',
        src: '/static/images/soygarlic-1.jpg',
      },
      {
        name: 'SPICY SOY GARLIC',
        src: '/static/images/soygarlic-5.jpg',
      },
      {
        name: 'EXTRA SPICY',
        src: '/static/images/sweet_spicy-2.jpg',
      },
      {
        name: 'SWEET & SPICY',
        src: '/static/images/sweet_spicy-3.jpg',
      },
      {
        name: 'HONEY GARLIC',
        src: '/static/images/honeygarlic-4.jpg',
      },
      {
        name: 'MILD',
        src: '/static/images/mild-5.jpg',
      },
    ];
    const state = ctx.store.getState();
    return {
      items,
      ...state,
    };
  }

  // handleEmailButton() {
  //   const value = document.querySelector('.main__input').value;
  //   fetch('/api/email', {
  //     method: 'POST',
  //     credentials: 'same-origin',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       value: value,
  //     }),
  //   });
  // }

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
            <div className="menu__list col-md-12">
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
                  className="menu__list-row col-md-12"
                >
                  {divs.map((item, idx) => (
                    <MenuItem item={item} idx={idx} />
                  ))}
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
        <style jsx global>{`
          .page-main {
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.4)
              ),
              url('static/images/koop-6.jpg');
            background-size: 100% 100%;
          }
        `}</style>
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
        {/* <input placeholder="Input your email here" className="main__input" />
        <button
          className="main__button"
          onClick={() => this.handleEmailButton()}
        >
          Send email
        </button> */}
        {button.active ? this.renderMenu(button) : null}
      </>
    );
  }

  render() {
    const { button } = this.props;
    return <>{this.renderHomeScreen(button)}</>;
  }
}
