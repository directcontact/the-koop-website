const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderQueueSchema = new Schema({
  orderNumber: Number,
  firstName: String,
  lastName: String,
  items: [String],
});

module.exports = mongoose.model('OrderQueue', orderQueueSchema);
