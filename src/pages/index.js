import { AnimatePresence, motion } from 'framer-motion';
import { chunk } from '../../util/helper';

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

  renderText() {
    return (
      <div className="menu__header">
        <p className="menu__header-text">
          Want to order by call?
          <br />
          Check your nearest locations for numbers
        </p>
        <p className="menu__header-text u-margin-top-small">
          If not, begin your order here
        </p>
      </div>
    );
  }

  renderMenu(button) {
    const menuItems = this.props.items;
    const sections = chunk(menuItems, 3);
    const divVariant = {
      active: {
        opacity: 1,
        transition: {
          delay: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99],
          staggerChildren: 0.1,
          duration: 0.3,
        },
      },
      inactive: {
        opacity: 0,
      },
    };

    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="menu"
          variants={divVariant}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
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
                  animate={button.active ? 'active' : 'inactive'}
                  className="menu__list-row col-md-12"
                >
                  {divs.map((item, idx) => (
                    <div className="menuitem col-md-4" key={idx}>
                      <h3 className="menuitem__title">{item.name}</h3>
                      <img src={item.src} className="menuitem__img" />
                    </div>
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

    return (
      <>
        <div className="main max-height">
          {!button.active ? (
            <motion.div
              variants={divVariant}
              transition={{ ease: 'easeInOut', duration: 0.3 }}
              animate={button.active ? 'active' : 'inactive'}
            >
              <h1 className="main__header">THE KOOP</h1>
              <h2 className="main__subheader u-margin-bottom-massive">
                KOREAN CHICKEN | KOREAN CUISINE | JOKBAL
              </h2>
            </motion.div>
          ) : null}
          {button.active ? this.renderText() : null}
          <motion.a
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            animate={button.active ? 'active' : 'inactive'}
            className="btn"
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
