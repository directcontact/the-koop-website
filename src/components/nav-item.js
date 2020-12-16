import Link from 'next/link';

const NavItem = (props) => {
  return (
    <li className="list-inline-item nav__item">
      <h2 className="nav__item-header">
        <Link href={props.page.href} prefetch={false}>
          <a className="nav__item-header-link">{props.page.name}</a>
        </Link>
      </h2>
    </li>
  );
};

export default NavItem;
