import { AnimatePresence, motion } from 'framer-motion';
import { chunk } from '../../util/helper';
import Image from 'next/image';

export default class MenuPage extends React.Component {
  constructor() {
    super();

    this.state = {
      navActive: {
        item: 'chicken',
        active: 'selected',
      },
      navItems: [
        'CHICKEN',
        'APPETIZERS',
        'RICE DISHES',
        'TROTTER',
        'SOUPS',
        'SIDES',
      ],
    };

    // this.handleEmailButton = this.handleEmailButton.bind(this);
  }

  static async getInitialProps(ctx) {
    //const res = await fetch('http://localhost:3000/api/menu/items');
    //const items = await res.json();
    const items = [
      {
        name: 'SOY GARLIC',
        type: 'chicken',
        src: '/static/images/soygarlic-1.jpg',
      },
      {
        name: 'SPICY SOY GARLIC',
        type: 'chicken',
        src: '/static/images/soygarlic-5.jpg',
      },
      {
        name: 'EXTRA SPICY',
        type: 'chicken',
        src: '/static/images/sweet_spicy-2.jpg',
      },
      {
        name: 'SWEET & SPICY',
        type: 'chicken',
        src: '/static/images/sweet_spicy-3.jpg',
      },
      {
        name: 'HONEY GARLIC',
        type: 'chicken',
        src: '/static/images/honeygarlic-4.jpg',
      },
      {
        name: 'MILD',
        type: 'chicken',
        src: '/static/images/mild-5.jpg',
      },
    ];
    //const state = ctx.store.getState();
    // return {
    //   items,
    //   ...state,
    // };

    return {
      items,
    };
  }

  renderMenu() {
    const menuItems = this.props.items;
    const sections = chunk(menuItems, 3);
    const navActive = this.state.navActive;
    const navItems = this.state.navItems;

    return (
      <>
        <div className="menu">
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
          <div className="menu__nav">
            <ul className="menu__nav-list u-margin-bottom-small">
              {navItems.map((item, idx) => {
                let active = '';
                let strup = navActive.item.toUpperCase();
                if (strup === item) {
                  active = navActive.active;
                }
                return (
                  <li
                    className={`menu__nav-list--item ${active}`}
                    key={idx}
                    onClick={() =>
                      this.setState({ navActive: { item, active: 'selected' } })
                    }
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="solid u-margin-top-small" />
          <div className="menu__container">
            <div className="menu__list col-md-12">
              {sections.map((divs, idx) => (
                <motion.div
                  key={idx}
                  className="menu__list-row col-md-12"
                  transition={{
                    staggerChildren: 0.5,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                >
                  {divs.map((item, idx) => (
                    <div className="menuitem col-md-4" key={idx}>
                      <h3 className="menuitem__title u-margin-bottom-small">
                        {item.name}
                      </h3>
                      <Image
                        src={item.src}
                        objectFit={'cover'}
                        width={300}
                        height={300}
                        loading="eager"
                        className="menuitem__img"
                      />
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    return <>{this.renderMenu()}</>;
  }
}
