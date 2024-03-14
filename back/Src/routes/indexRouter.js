const { Router } = require('express')
const moviesController = require('../controllers/moviesController')

const router = Router()

router.get('/movies', moviesController.getMovies)

module.exports = router;