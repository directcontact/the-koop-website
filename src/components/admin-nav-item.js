import Link from 'next/link';

const AdminNavItem = (props) => {
  return (
    <li className="list-inline-item adminnav__list-item">
      <Link href={props.page.href}>
        <a
          className={`adminnav__list-item--link`}
          onClick={() => setActive(props.page.name)}
        >
          {props.page.name}
        </a>
      </Link>
    </li>
  );
};

export default AdminNavItem;
