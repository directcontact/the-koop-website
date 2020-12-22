import { AnimatePresence, motion } from 'framer-motion';
import { groupBy } from '../../util/helper';

const ChickenMenuSauce = (props) => {
  const prices = props.prices;
  const grouped = groupBy(prices, 'type');
  const iterable = Object.entries(grouped);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="menu__list-top"
      >
        <h3 className="menu__list-header u-margin-bottom-medium">
          STEP ONE: CHOOSE YOUR TYPE OF CHICKEN
        </h3>
        <div className="menu__list-yaxis col-md-12">
          <div className="menu__list-yaxis--item col-md-4">Small</div>
          <div className="menu__list-yaxis--item col-md-4">Large</div>
        </div>
        {iterable.map((priceGroup, idx) => {
          const small = priceGroup[1][0];
          const large = priceGroup[1][1];

          return (
            <div className="menu__list-row col-md-12" key={idx}>
              <div className="menu__list-row--item_header col-md-4">
                {priceGroup[0]}
              </div>
              <div className="menu__list-row--item col-md-4">
                {`$${small.price}`}
                <span className="menu__list-row--item_price">
                  {small.amount}
                </span>
                <span className="menu__list-row--item_price">
                  {small.units}
                </span>
              </div>
              <div className="menu__list-row--item col-md-4">
                {`$${large.price}`}
                <span className="menu__list-row--item_price">
                  {large.amount}
                </span>
                <span className="menu__list-row--item_price">
                  {large.units}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default ChickenMenuSauce;
