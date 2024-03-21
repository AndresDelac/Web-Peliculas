const {getPeliculas, postMovieService} = require('../services/indexServices')

const getMovies = async (req, res)=>{
    const peliculas = await getPeliculas();
    res.json(peliculas);
}

const postMovie = async (req, res) => {
    try {     
        await postMovieService(req.body)
        
        res.status(201).json({message: "Se ha creado existosamente la pelicula"})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getMovies,
    postMovie
}