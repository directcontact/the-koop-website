import React from 'react';

import ChickenMenu from '../components/chicken-menu';
import { chunk } from '../../util/helper';

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
    const menuItems = this.props.items;
    switch (navActive.item) {
      case 'chicken':
        const sections = chunk(menuItems, 2);
        return <ChickenMenu sections={sections} />;
      case 'appetizers':
      case 'rice dishes':
      case 'trotter':
      case 'soups':
      case 'sides':
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
                Want to order by call?
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
          <div className="menu__container col-md-12">
            {this.renderMenuComponent(navActive)}
          </div>
        </div>
      </>
    );
  }

  render() {
    return <>{this.renderMenu()}</>;
  }
}

export async function getStaticProps(ctx) {
  const res = await fetch('http://localhost:3000/api/menu/chicken/items');
  const items = await res.json();
  return {
    props: {
      items,
    },
  };
}
