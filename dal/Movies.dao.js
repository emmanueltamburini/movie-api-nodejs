const movies = require('./index').db('store').collection('movies');

const save = async ({title, year, released, genre, director, actors, plot, ratings}) => {
    const result = await movies.insertOne({title, year, released, genre, director, actors, plot, ratings});
    return getById(result.insertedId);
}

const getAll = async (page) => {
    const limit = 5;
    const startIndex = (page - 1) * limit;
    const allMovies = await movies.find().skip(startIndex).limit(limit).sort(["id", 1]);

    return allMovies.toArray();
}

const getById = async (id) => {
    return movies.findOne({_id: id});
}

const getByTitleAndYear = async (title, year) => {
    var regex = new RegExp(title, "i");

    if (year) {
        return movies.findOne({title: regex, year: year});
    }

    return movies.findOne({title: regex});
}

const updateByTitle = async (titleSearch, plot) => { 
    var regex = new RegExp(titleSearch, "i");
    const response = await movies.findOneAndUpdate({title: regex},
        [
            { $set: { plot: plot } }
        ]);
    return response.value;
}

module.exports = {save, getAll, getById, getByTitleAndYear, updateByTitle};