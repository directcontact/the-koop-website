import Link from 'next/link';
import { connect } from 'react-redux';
import { setActive } from '../redux/actions/nav';

const NavItem = (props) => {
  const { nav, setActive } = props;
  const activeClass = nav.active === props.page.name ? 'active' : '';
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

export const mapStateToProps = (state) => ({
  nav: state.nav,
});

export const mapDispatchToProps = {
  setActive: setActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);
