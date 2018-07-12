// getting-started.js
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ashis');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function () {
  console.log('Database Connnected...');
});


module.exports = mongoose;