import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <div className="row nav">
        <div className="col-md-2 nav__block">
          <h2 className="nav__item-header">
            <Link className="nav__header-link" href="/">
              <a className="nav__item-header-link">LOGO</a>
            </Link>
          </h2>
        </div>
        <div className="col-md-8 nav__block">
          <ul className="list-inline nav__block-list">
            <li className="list-inline-item nav__item">
              <h2 className="nav__item-header">
                <Link href="/menu">
                  <a className="nav__item-header-link">MENU</a>
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
            <a className="btn u-margin-top-small">ORDER ONLINE</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
