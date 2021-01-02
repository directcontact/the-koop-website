import { AnimatePresence, motion } from 'framer-motion';

const StandardMenuItem = (props) => {
  const sections = props.sections;

  const renderMultiPrice = (price) => {
    return (
      <span>
        S: ${price.small} / L: ${price.large}
      </span>
    );
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="u-margin-top-small"
      >
        {sections.map((item, idx) => (
          <div
            className="standardmenu__row col-md-12 u-margin-bottom-medium"
            key={idx}
          >
            <div className="standardmenu__row-item">
              <span className="standardmenu__row-item--name">
                {item.name.toUpperCase()}
                {item.amount ? ` (${item.amount})` : null}
              </span>
              <span className="standardmenu__row-item--price">
                {typeof item.price !== 'object'
                  ? `$${item.price}`
                  : renderMultiPrice(item.price)}
              </span>
            </div>
            <div className="standardmenu__row-description">
              {item.description}
            </div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default StandardMenuItem;
