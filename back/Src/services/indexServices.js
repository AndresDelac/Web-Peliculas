const Movie = require('../models/Movie');

const getPeliculas = async () => {
    const movies = await Movie.find()

    return movies;
}

const postMovieService = async (movie) =>{
    try {
         const newMovie = await Movie.create(movie)
         return newMovie

    } catch (error) {
         Error(error.message);
        
    }
}

module.exports = {
    getPeliculas,
    postMovieService,
};
