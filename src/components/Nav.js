import Link from 'next/link';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { setActive } from '../redux/actions/button';

const Nav = (props) => {
  const { setActive } = props;
  return (
    <>
      <div className="row nav">
        <div className="col-md-2 nav__block">
          <h2 className="nav__item-header">
            <Link className="nav__header-link" href="/">
              <a
                onClick={() => setActive(false)}
                className="nav__item-header-link"
              >
                LOGO
              </a>
            </Link>
          </h2>
        </div>
        <div className="col-md-8 nav__block">
          <ul className="list-inline nav__block-list">
            <li className="list-inline-item nav__item">
              <h2 className="nav__item-header">
                <Link href="/">
                  <a
                    onClick={() => setActive(true)}
                    className="nav__item-header-link"
                  >
                    MENU
                  </a>
                </Link>
              </h2>
            </li>
            <li className="list-inline-item nav__item">
              <h2 className="nav__item-header">
                <Link href="/location">
                  <a className="nav__item-header-link">LOCATIONS</a>
                </Link>
              </h2>
            </li>
            <li className="list-inline-item nav__item">
              <h2 className="nav__item-header">
                <Link href="/story">
                  <a className="nav__item-header-link">OUR STORY</a>
                </Link>
              </h2>
            </li>
            <li className="list-inline-item nav__item">
              <h2 className="nav__item-header">
                <Link href="/catering">
                  <a className="nav__item-header-link">CATERING</a>
                </Link>
              </h2>
            </li>
          </ul>
        </div>
        <div className="col-md-2 nav__block">
          <div className="nav__icon">
            <a className="nav__icon-link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const mapStateToProps = (state) => ({
  button: state.button,
});

export const mapDispatchToProps = {
  setActive: setActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
