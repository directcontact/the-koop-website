import { motion } from 'framer-motion';

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
    <div className="u-margin-top-small">
      {sections.map((item) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          key={item.name}
          className="standardmenu__row col-md-12 u-margin-bottom-medium"
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
        </motion.div>
      ))}
    </div>
  );
};

export default StandardMenuItem;
