const {save, getAll, getByTitleAndYear, updateByTitle} = require("../dal/Movies.dao.js");
const Movie = require("../models/Movies.models.js");
const fetch = require("node-fetch");
const API_KEY = "aa94d04f";

const getMovie = async (title, year) => {
    const movieResponse = await getByTitleAndYear(title, year);

    if (movieResponse) {
        return movieResponse;
    }

    const urlYear = year ? `&y=${year}` : ''
    const response = await fetch(`http://www.omdbapi.com/?t=${title}${urlYear}&apikey=${API_KEY}`);
    const body = await response.json();

    if (response.status === 200 && body.Response === "True") {
        const movie = new Movie({
            title: body.Title,
            year: body.Year,
            released: body.Released,
            genre: body.Genre,
            director: body.Director,
            actors: body.Actors,
            plot: body.Plot,
            ratings: body.Ratings,
        });

        return save({...movie});
    }
    
    return 'Movie has not been found';
}

const getAllMovie = async (page) => {
    return getAll(page);
}

const searchAndUpdateByTitle = async (movie, find, replace) => {
    const movieResponse = await getByTitleAndYear(movie, null);
    var regex = new RegExp(find, "g");
    if (movieResponse) {
        return updateByTitle(movie, movieResponse.plot.replace(regex, replace));
    }

    return 'Movie has not been found';
}

module.exports = {getMovie, getAllMovie, searchAndUpdateByTitle};