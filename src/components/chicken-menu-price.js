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
        <div className="menu__list-yaxis">
          <div className="menu__list-yaxis--item">Small</div>
          <div className="menu__list-yaxis--item">Large</div>
        </div>
        <div className="menu__list-rows">
          {iterable.map((priceGroup, idx) => {
            const small = priceGroup[1][0];
            const large = priceGroup[1][1];
            return (
              <div className="menu__list-rows--row" key={idx}>
                <div className="menu__list-rows--row---item">
                  {priceGroup[0]}
                </div>
                <div className="menu__list-rows--row---item">
                  {`${small.price} /`}
                  <span className="menu__list-rows--row---item_price">
                    ${small.amount}
                  </span>
                </div>
                <div className="menu__list-rows--row---item">
                  {`${large.price} /`}
                  <span className="menu__list-rows--row---item_price">
                    ${large.amount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChickenMenuSauce;
