const {save, getAll, getByTitleAndYear, updateByTitle} = require("../repository/Movies.repository.js");
const fetch = require("node-fetch");
const {GLOBAL_SEARCH} = require("../constant/regex");
const {OMDB_API, TRUE} = require("../constant/service");

const API_KEY = process.env.API_KEY;

const getMovie = async (title, year) => {
    const movieResponse = await getByTitleAndYear(title, year);

    if (movieResponse) {
        return movieResponse;
    }

    const response = await fetch(OMDB_API(title, year, API_KEY));
    const body = await response.json();

    if (response.status === 200 && body.Response === TRUE) {
        const movie = {
            title: body.Title,
            year: body.Year,
            released: body.Released,
            genre: body.Genre,
            director: body.Director,
            actors: body.Actors,
            plot: body.Plot,
            ratings: body.Ratings,
        };

        return save({...movie});
    }
    
    return null;
}

const getAllMovie = async (page) => {
    return getAll(page);
}

const searchAndUpdateByTitle = async (movie, find, replace) => {
    const movieResponse = await getByTitleAndYear(movie, null);
    var regex = new RegExp(find, GLOBAL_SEARCH);
    if (movieResponse) {
        return updateByTitle(movie, movieResponse.plot.replace(regex, replace));
    }

    return null;
}

module.exports = {getMovie, getAllMovie, searchAndUpdateByTitle};