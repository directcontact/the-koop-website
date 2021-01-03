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

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div variants={stagger} className="u-margin-top-small">
      {sections.map((item, idx) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="standardmenu__row col-md-12 u-margin-bottom-medium"
          key={Math.random() * (idx + 1)}
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
    </motion.div>
  );
};

export default StandardMenuItem;
