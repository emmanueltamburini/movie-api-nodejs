const {getMovie, getAllMovie, searchAndUpdateByTitle} = require("../service/Movie.service");

const getMovieAPI = async (title, year) => {
    return getMovie(title, year);
}

const getAllMovieAPI = async (page) => {
    return getAllMovie(page);
}

const searchAndUpdateByTitleAPI = async (movie, find, replace) => {
    return searchAndUpdateByTitle(movie, find, replace);
}

module.exports = {getMovieAPI, getAllMovieAPI, searchAndUpdateByTitleAPI};