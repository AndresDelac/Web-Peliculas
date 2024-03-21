const { Router } = require('express')
const entrada = require('../controllers/indexController')
const moviesRoute = require('./moviesRoute')

const router = Router()
//Entrada al servidor sin ir a alguna ruta
router.get('/', entrada);

//RUTAS
router.use('/movies', moviesRoute)

module.exports = router;