const mongoose = require("mongoose");
const {MOVIE_MODEL, MOVIES_COLLECTION} = require("../constant/models");

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
  { collection: MOVIES_COLLECTION }
);


module.exports = mongoose.model(MOVIE_MODEL, movie);