class Movie {
	constructor({ 
        title = '',
        year = '',
        released = '',
        genre = '',
        director = '',
        actors = '',
        plot = '',
        ratings = ''
    }) {
        this.title = title;
        this.year = year;
        this.released = released;
        this.genre = genre;
        this.director = director;
        this.actors = actors;
        this.plot = plot;
        this.ratings = ratings;
	}
}

module.exports = Movie;