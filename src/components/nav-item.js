import Link from 'next/link';

const NavItem = (props) => {
  const { active, setActive } = props;
  const activeClass = active === props.page.name ? 'active' : '';
  return (
    <li className="list-inline-item nav__item">
      <h2 className={`nav__item-header ${activeClass}`}>
        <Link href={props.page.href}>
          <a
            className={`nav__item-header-link`}
            onClick={() => setActive(props.page.name)}
          >
            {props.page.name}
          </a>
        </Link>
      </h2>
    </li>
  );
};

export default NavItem;
