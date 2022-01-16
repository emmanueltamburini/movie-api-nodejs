const mongoose = require("mongoose");
const {OPEN} = require("../constant/repository");
const {MONGO_DB_CONNECTION, MONGO_DB_CONNECTION_TRYING } = require("../constant/messages");
const dotenv = require('dotenv')
dotenv.config();

const URI = process.env.MONGO_URI;
console.log(MONGO_DB_CONNECTION_TRYING(URI))
mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once(OPEN, function() {
  console.log(MONGO_DB_CONNECTION);
});

module.exports = mongoose;