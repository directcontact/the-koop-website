import ChickenMenuSauce from './chicken-menu-sauce';
import ChickenMenuPrice from './chicken-menu-price';
import ChickenMenuSide from './chicken-menu-side';
import { chunk } from '../../util/helper';
import { motion } from 'framer-motion';

const ChickenMenu = (props) => {
  const sauceSections = chunk(props.sauce, 2);
  return (
    <>
      <div className="menu__list col-md-6">
        <ChickenMenuPrice prices={props.prices} />
        <ChickenMenuSide />
        <div className="menu__list-chicken">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            key={props.nav}
            className="menu__list-chicken--img"
            src="/static/images/chick2.png"
          />
        </div>
      </div>
      <div className="menu__list col-md-6">
        <ChickenMenuSauce sections={sauceSections} />
      </div>
    </>
  );
};

export default ChickenMenu;
