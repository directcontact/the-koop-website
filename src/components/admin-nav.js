import AdminNavItem from './admin-nav-item';
import { useState } from 'react';

const AdminNav = () => {
  const [active, setActive] = useState('');

  const pages = [
    { name: 'Incomplete Orders', href: '/admin/incomplete' },
    { name: 'Complete Orders', href: '/admin/complete' },
    { name: 'Website Alerts', href: '/admin/alert' },
  ];

  return (
    <>
      <div className="row adminnav">
        <ul className="adminnav__list">
          {pages.map((page) => (
            <AdminNavItem page={page} key={page.name} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminNav;
