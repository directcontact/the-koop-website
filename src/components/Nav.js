import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <>
      <div className="row menu">
        <div className="col-md-2 menu__block">
          <h2 className="menu__item-header">
            <Link className="menu__header-link" href="/">
              <a className="menu__item-header-link">LOGO</a>
            </Link>
          </h2>
        </div>
        <div className="col-md-8 menu__block">
          <ul className="list-inline menu__block-nav">
            <li className="list-inline-item menu__item">
              <h2 className="menu__item-header">
                <Link href="/menu">
                  <a className="menu__item-header-link">MENU</a>
                </Link>
              </h2>
            </li>
            <li className="list-inline-item menu__item">
              <h2 className="menu__item-header">
                <Link href="/location">
                  <a className="menu__item-header-link">LOCATIONS</a>
                </Link>
              </h2>
            </li>
            <li className="list-inline-item menu__item">
              <h2 className="menu__item-header">
                <Link href="/story">
                  <a className="menu__item-header-link">OUR STORY</a>
                </Link>
              </h2>
            </li>
            <li className="list-inline-item menu__item">
              <h2 className="menu__item-header">
                <Link href="/catering">
                  <a className="menu__item-header-link">CATERING</a>
                </Link>
              </h2>
            </li>
          </ul>
        </div>
        <div className="col-md-2 menu__block">
          <div className="menu__icon">
            <a className="menu__icon-link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
