const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let movie = new Schema(
  {
    title: {
        type: String
    },
    year: {
        type: String
    },
    released: {
        type: String
    },
    genre: {
        type: String
    },
    director: {
        type: String
    },
    actors: {
        type: String
    },
    plot: {
        type: String
    },
    ratings: {
        type: Array
    }
  },
  { collection: "Movies" }
);


module.exports = mongoose.model("movie", movie);