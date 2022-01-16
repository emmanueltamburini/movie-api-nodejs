const movies = require("../models/Movies");
const {IGNORE_CASE_SEARCH} = require("../constant/regex");
const {PAGE_LIMIT} = require("../constant/repository");

const save = async ({title, year, released, genre, director, actors, plot, ratings}) => {
    return movies.create({
        title: title,
        year: year,
        released: released,
        genre: genre,
        director: director,
        actors: actors,
        plot: plot,
        ratings: ratings
    });
}

const getAll = async (page) => {
    const limit = PAGE_LIMIT;
    const startIndex = (page - 1) * limit;
    return movies.find().skip(startIndex).limit(limit);
}

const getByTitleAndYear = async (title, year) => {
    var regex = new RegExp(title, IGNORE_CASE_SEARCH);

    if (year) {
        return movies.findOne({title: regex, year: year});
    }

    return movies.findOne({title: regex});
}

const updateByTitle = async (titleSearch, plot) => { 
    var regex = new RegExp(titleSearch, IGNORE_CASE_SEARCH);
    return movies.findOneAndUpdate({title: regex},
        [
            { $set: { plot: plot } }
        ],
        {new: true});
}

module.exports = {save, getAll, getByTitleAndYear, updateByTitle};