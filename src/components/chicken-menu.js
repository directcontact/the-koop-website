import ChickenMenuSauce from './chicken-menu-sauce';
import ChickenMenuPrice from './chicken-menu-price';
import ChickenMenuSide from './chicken-menu-side';
import { chunk } from '../../util/helper';

const ChickenMenu = (props) => {
  const sauceSections = chunk(props.sauce, 2);
  return (
    <>
      <div className="menu__list col-md-6">
        <ChickenMenuPrice prices={props.prices} />
        <ChickenMenuSide />
        <div className="menu__list-chicken">
          <img
            className="menu__list-chicken--img"
            src="/static/images/chick.png"
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
