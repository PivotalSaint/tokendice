const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mmongodb://localhost:27017/tokendice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
