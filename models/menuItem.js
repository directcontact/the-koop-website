const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: String,
  description: String,
  url: String,
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
