import StandardMenuItem from './standard-menu-item';
import { chunk } from '../../util/helper';
import { AnimatePresence } from 'framer-motion';

const StandardMenu = (props) => {
  const sections = chunk(props.items, props.items.length / 2);
  let firstSection = sections[0];
  let secondSection = sections[1];
  if (props.items.length % 2 === 1) {
    secondSection.push(sections[2][0]);
  }

  return (
    <>
      <div className="standardmenu col-md-6">
        <StandardMenuItem sections={firstSection} />
        <div className="standardmenu-chicken">
          <img className="standardmenu__img" src="/static/images/chick.png" />
        </div>
      </div>
      <div className="standardmenu col-md-6">
        <StandardMenuItem sections={secondSection} />
      </div>
    </>
  );
};

export default StandardMenu;
