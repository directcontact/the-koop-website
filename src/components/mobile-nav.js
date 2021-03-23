import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import MobileNavItem from './mobile-nav-item';

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const pages = [
    { name: 'MENU', href: '/menu' },
    { name: 'LOCATION', href: '/location' },
    { name: 'OUR STORY', href: '/story' },
    { name: 'CATERING', href: '/catering' },
  ];

  const list = {
    hidden: {
      width: '0%',
      opacity: 0,
      transition: {
        type: 'easeinout',
        stiffness: 20,
        restDelta: 1,
      },
    },
    show: {
      opacity: 1,
      display: 'flex',
      width: '66%',
      transition: {
        type: 'easeinout',
        stiffness: 20,
        restDelta: 1,
        duration: 0.66,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <div className="mobilenav">
      <div className="mobilenav-hamburger">
        <Hamburger
          size={50}
          toggled={isOpen}
          toggle={setOpen}
          color={!isOpen ? '#fff' : '#000'}
        />
      </div>

      <motion.ul
        className="mobilenav-list"
        variants={list}
        initial={'hidden'}
        animate={isOpen ? 'show' : 'hidden'}
        key="mobilenav"
      >
        {isOpen
          ? pages.map((page) => (
              <MobileNavItem
                page={page}
                key={`${page.href}mobile`}
                isOpen={isOpen}
                active={active}
                setActive={setActive}
              />
            ))
          : null}
      </motion.ul>
    </div>
  );
};

export default MobileNav;
