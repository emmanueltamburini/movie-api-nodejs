const mongoose = require("mongoose");
const {OPEN} = require("../constant/repository");
const {MONGO_DB_CONNECTION} = require("../constant/messages");

var uri = "mongodb://localhost:27017/details";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once(OPEN, function() {
  console.log(MONGO_DB_CONNECTION);
});

module.exports = mongoose;