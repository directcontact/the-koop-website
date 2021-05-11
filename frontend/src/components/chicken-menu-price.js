import { motion } from 'framer-motion';
import { groupBy } from '../../util/helper';

const ChickenMenuSauce = (props) => {
  const prices = props.prices;
  const grouped = groupBy(prices, 'type');
  const iterable = Object.entries(grouped);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      key="chicken-price"
      className="menu__list-top"
    >
      <h3 className="menu__list-header u-margin-bottom-medium">
        STEP ONE: CHOOSE YOUR TYPE OF CHICKEN
      </h3>
      <div className="menu__list-yaxis col-md-12">
        <div className="menu__list-yaxis--item col-md-4"></div>
        <div className="menu__list-yaxis--item col-md-4">Small</div>
        <div className="menu__list-yaxis--item col-md-4">Large</div>
      </div>
      {iterable.map((priceGroup) => {
        const small = priceGroup[1][0];
        const large = priceGroup[1][1];

        return (
          <div className="menu__list-row col-sm-12" key={priceGroup[0]}>
            <div className="menu__list-row--item_header col-sm-4">
              {priceGroup[0]}
            </div>
            <div className="menu__list-row--item col-sm-4">
              {`$${small.price}`}
              {small.units === 'g' ? (
                <span className="menu__list-row--item_special">≈</span>
              ) : null}
              <span className="menu__list-row--item_price">{small.amount}</span>
              <span className="menu__list-row--item_price">
                {small.units === 'P/C' ? ` ${small.units}` : small.units}
              </span>
            </div>
            <div className="menu__list-row--item col-sm-4">
              {`$${large.price}`}
              {large.units === 'g' ? (
                <span className="menu__list-row--item_special">≈</span>
              ) : null}
              <span className="menu__list-row--item_price">{large.amount}</span>
              <span className="menu__list-row--item_price">
                {large.units === 'P/C' ? ` ${large.units}` : large.units}
              </span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ChickenMenuSauce;
