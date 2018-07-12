var mongoose = require('../db');

var PageSchema = mongoose.Schema({
  title: String,
  key: String,
  desc: String,
  content: String,
  status: String,
});

var page = mongoose.model('pages', PageSchema);

module.exports = page;
