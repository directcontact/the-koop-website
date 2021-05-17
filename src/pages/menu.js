import React from 'react';
import fs from 'fs';

import ChickenMenu from '../components/chicken-menu';
import StandardMenu from '../components/standard-menu';
import dynamic from 'next/dynamic';

const MobileMenuNav = dynamic(() => import('../components/mobile-menu-nav'), {
  ssr: false,
  loading: () => <div className="location__map-loading">LOADING...</div>,
});
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
  }

  renderMenuComponent(navActive) {
    switch (navActive.item) {
      case 'chicken':
        const sauce = this.props.menu.chicken.items.filter(
          (item) => item.type === 'chicken'
        );
        const prices = this.props.menu.chicken.prices.filter(
          (price) => price.item === 'chicken'
        );
        return (
          <ChickenMenu sauce={sauce} prices={prices} nav={navActive.item} />
        );
      case 'appetizers':
        const appetizer = this.props.menu.items.filter(
          (item) => item.type === 'appetizer'
        );
        return <StandardMenu items={appetizer} nav={navActive.item} />;
      case 'rice dishes':
        const rice = this.props.menu.items.filter(
          (item) => item.type === 'rice'
        );
        return <StandardMenu items={rice} nav={navActive.item} />;
      case 'trotter':
        const trotter = this.props.menu.items.filter(
          (item) => item.type === 'trotter'
        );
        return <StandardMenu items={trotter} nav={navActive.item} />;
      case 'soups':
        const soups = this.props.menu.items.filter(
          (item) => item.type === 'soup'
        );
        return <StandardMenu items={soups} nav={navActive.item} />;
      case 'sides':
        const sides = this.props.menu.items.filter(
          (item) => item.type === 'side'
        );
        return <StandardMenu items={sides} nav={navActive.item} />;
      default:
        return null;
    }
  }

  renderMenu() {
    const navActive = this.state.navActive;
    const navItems = this.state.navItems;
    return (
      <>
        <div className="menu">
          <div className="menu__header">
            <div className="menu__header-text">
              <p className="menu__header-text--content">
                Want to order by phone?
              </p>
              <p className="menu__header-text--content u-margin-top-small">
                Check your nearest locations for numbers
              </p>
            </div>
            <div className="menu__header-pdf">
              <p className="menu__header-pdf--text">PDF Version:</p>
              <a
                className="menu__header-pdf--link"
                href="/static/misc-files/koop-menu.pdf"
                target="_blank"
              >
                Koop Menu
              </a>
            </div>
          </div>

          {this.props.deviceType ? (
            <MobileMenuNav />
          ) : (
            <>
              <div className="menu__nav">
                <ul className="menu__nav-list u-margin-bottom-small">
                  {navItems.map((item) => {
                    let active = '';
                    let strup = navActive.item.toUpperCase();
                    if (strup === item) {
                      active = navActive.active;
                    }
                    return (
                      <li
                        className={`menu__nav-list--item ${active}`}
                        key={item}
                        onClick={() =>
                          this.setState({
                            navActive: {
                              item: item.toLowerCase(),
                              active: 'selected',
                            },
                          })
                        }
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <hr className="solid u-margin-top-small" />
              <div className="menu__container col-md-12 col-sm-12 col-12">
                {this.renderMenuComponent(navActive)}
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  render() {
    return <>{this.renderMenu()}</>;
  }
}

export async function getServerSideProps(context) {
  const file = fs.readFileSync('./public/static/data/items.json');
  const menu = JSON.parse(file);
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  console.log(isMobile);

  return {
    props: {
      menu,
      deviceType: isMobile,
    },
  };
}
