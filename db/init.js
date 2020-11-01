const mongoose = require('mongoose');
const { inspect } = require('util');

module.exports = function connectToDb() {
  mongoose.connect('http://localhost:27017', { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on('error', ex => console.error(`MongoDB error. ${inspect(ex, true, 4)}`));
  db.once('open', () => console.loog('Connected to mongodb'));

}
