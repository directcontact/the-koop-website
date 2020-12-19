import ChickenMenuSauce from './chicken-menu-sauce';
import ChickenMenuPrice from './chicken-menu-price';
import { chunk } from '../../util/helper';

const ChickenMenu = (props) => {
  const sauceSections = chunk(props.sauce, 2);
  return (
    <>
      <div className="menu__list col-md-6">
        <ChickenMenuPrice prices={props.prices} />
      </div>
      <div className="menu__list col-md-6">
        <ChickenMenuSauce sections={sauceSections} />
      </div>
    </>
  );
};

export default ChickenMenu;
