const movies = require('./index').db('store').collection('movies');

const save = async ({title, year, released, genre, director, actors, plot, ratings}) => {
    const result = await movies.insertOne({title, year, released, genre, director, actors, plot, ratings});

    return result.ops[0];
}

const getAll = async (page) => {
    const limit = 5;
    const startIndex = (page - 1) * limit;
    const allMovies = await movies.find().skip(startIndex).limit(limit).sort(["id", 1]).pretty();

    return allMovies.toArray();
}

const getByTitleAndYear = async (title, year) => {
    return movies.findOne({title: title, year: year});
}

const updateByTitle = async (titleSearch, {title, year, released, genre, director, actors, plot, ratings}) => { 
    const result = await movies.replaceOne({title: titleSearch}, {title, year, released, genre, director, actors, plot, ratings})
    return result.ops[0];
}

module.exports = {save, getAll, getByTitleAndYear, updateByTitle};