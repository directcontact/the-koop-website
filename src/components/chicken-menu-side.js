import { motion } from 'framer-motion';

const ChickenMenuSauce = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      key="chicken-side"
      className="menu__list-top"
    >
      <h3 className="menu__list-header u-margin-bottom-medium">
        STEP THREE: CHOOSE YOUR TYPE OF CHICKEN
      </h3>
      <div className="menu__list-row col-md-12">
        <div className="menu__list-row--text text-center col-md-4">
          White Rice
        </div>
        <div className="menu__list-row--text text-center col-md-4">OR</div>
        <div className="menu__list-row--text text-center col-md-4">
          Pickled Radish
        </div>
      </div>
    </motion.div>
  );
};

export default ChickenMenuSauce;
