import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const ChickenMenuSauce = (props) => {
  const sections = props.sections;
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="menu__list-header u-margin-bottom-medium">
          STEP TWO: CHOOSE YOUR SAUCE
        </h3>
        {sections.map((divs, idx) => (
          <div key={idx} className="menu__list-column col-md-12">
            {divs.map((item, idx) => (
              <div
                className="menuitem col-md-6 u-padding-left-medium u-padding-bottom-medium"
                key={idx}
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
                  loading="eager"
                  className="menuitem__img"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ChickenMenuSauce;
