const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/NOSQL', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;