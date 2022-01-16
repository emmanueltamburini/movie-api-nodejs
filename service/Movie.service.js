const {save, getAll, getByTitleAndYear, updateByTitle} = require("../dal/Movies.dao.js");
const {Movie} = require("../models/Movies.models.js");

const getMovie = async (title, year) => {
    const movieResponse = await getByTitleAndYear(title, year);

    if (movieResponse) {
        return movieResponse;
    }

    // TODO add api from movies

    const movieFromApi = movieResponse;

    return movieFromApi;
}

const getAllMovie = async (page) => {
    return getAll(page);
}


const searchAndUpdateByTitle = async (movie, find, replace) => {
    const movieResponse = await getByTitleAndYear(movie, null);
    var regex = new RegExp(replace, "g");
    if (movieResponse) {
        movieResponse.plot = movieResponse.plot.replace(regex, find); 
        return updateByTitle(movie, movieResponse)
    }

    return null;
}

module.exports = {getMovie, getAllMovie, searchAndUpdateByTitle};