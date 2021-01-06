import Link from 'next/link';
import NavItem from './nav-item';

const Nav = () => {
  const pages = [
    { name: 'MENU', href: '/menu' },
    { name: 'LOCATION', href: '/location' },
    { name: 'OUR STORY', href: '/story' },
    { name: 'CATERING', href: '/catering' },
  ];
  return (
    <>
      <div className="row nav">
        <div className="col-md-2 nav__block">
          <h2 className="nav__item-header">
            <Link href="/">
              <img
                src="/static/images/the-koop-logo.png"
                className="nav__item-header--logo"
              />
            </Link>
          </h2>
        </div>
        <div className="col-md-8 nav__block">
          <ul className="list-inline nav__block-list">
            {pages.map((page) => (
              <NavItem page={page} key={page.href} />
            ))}
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
