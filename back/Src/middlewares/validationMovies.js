const validateMovies = (req, res, next) => {
    const {title, year, director, duration, genre, rate, poster, imgFondo} = req.body

    if(![title, year, director, duration, genre, rate, poster, imgFondo].every(Boolean)) return res.status(400).json({message: 'Faltan campos por completar'})

    next()

}

module.exports = validateMovies;