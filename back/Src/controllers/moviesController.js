const getPeliculas = require('../services/indexServices')


module.exports = {
    getMovies: async (req, res)=>{
        const peliculas = getPeliculas();
        res.json(peliculas);
    }
};