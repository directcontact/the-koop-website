import ChickenMenuSauce from './chicken-menu-sauce';
import ChickenMenuPrice from './chicken-menu-price';

const ChickenMenu = (props) => {
  const sections = props.sections;
  return (
    <>
      <div className="menu__list col-md-6">
        <div className="menu__list-column">
          <ChickenMenuPrice sections={sections} />
        </div>
      </div>
      <div className="menu__list col-md-6">
        <ChickenMenuSauce sections={sections} />
      </div>
    </>
  );
};

export default ChickenMenu;
