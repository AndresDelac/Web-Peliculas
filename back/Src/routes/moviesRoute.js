const { Router } = require('express')
const  {getMovies, postMovie}  = require('../controllers/moviesController')
const validateMovies = require('../middlewares/validationMovies')


const moviesRoute = Router()

//RUTAS PARA INTERACTUAR CON DB
moviesRoute.get('/', getMovies)
moviesRoute.post('/', validateMovies, postMovie)

module.exports = moviesRoute;