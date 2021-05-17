import Image from 'next/image';
import { motion } from 'framer-motion';

const ChickenMenuSauce = (props) => {
  const sections = props.sections;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      key="chicken-sauce"
    >
      <h3 className="menu__list-header u-margin-bottom-medium">
        STEP TWO: CHOOSE YOUR SAUCE
      </h3>
      {sections.map((divs, idx) => (
        <div key={(idx + 1) * 2} className="menu__list-column col-md-12">
          {divs.map((item) => (
            <div
              className="menuitem col-md-6 u-margin-left-medium u-margin-bottom-medium"
              key={item.name}
            >
              <div className="menuitem__header u-margin-bottom-small">
                {item.name.toUpperCase()}
              </div>
              <Image
                src={item.src}
                alt={item.name}
                objectFit={'cover'}
                width={275}
                height={275}
                priority="true"
                unoptimized="true"
                loading="eager"
                className="menuitem__img"
              />
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default ChickenMenuSauce;
