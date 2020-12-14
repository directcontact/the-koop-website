import Image from 'next/image';
import { motion } from 'framer-motion';

const ChickenMenu = (props) => {
  const sections = props.sections;
  return (
    <div className="menu__container">
      <div className="menu__list col-md-6">
        {sections.map((divs, idx) => (
          <motion.div
            key={idx}
            className="menu__list-row col-md-6"
            transition={{
              staggerChildren: 0.5,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            {divs.map((item, idx) => (
              <div className="menuitem col-md-3" key={idx}>
                <h3 className="menuitem__title u-margin-bottom-small">
                  {item.name}
                </h3>
                <Image
                  src={item.src}
                  objectFit={'cover'}
                  width={300}
                  height={300}
                  loading="eager"
                  className="menuitem__img"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChickenMenu;
