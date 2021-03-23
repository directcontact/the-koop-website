import Link from 'next/link';
import { motion } from 'framer-motion';

const MobileNavItem = (props) => {
  const { isOpen, active, setActive } = props;
  const activeClass = active === props.page.name ? 'active' : '';
  const variants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };
  return (
    <motion.li
      className="list-inline-item nav__item"
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
      initial={'closed'}
      transition={{ delay: 0.66, default: { duration: 0.66 } }}
      key={`mobilenavitem${props.page.href}`}
    >
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
    </motion.li>
  );
};

export default MobileNavItem;
