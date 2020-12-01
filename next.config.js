const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  webpack(config) {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
});
