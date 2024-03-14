const axios = require('axios')

const renderPeliculas = require('./renderPeliculas')

const getMovie = () => {
    axios.get('http://localhost:3000/movies')
    .then(({data})=> data.forEach(renderPeliculas))
    .catch((error)=> console.log(error.message));
}

getMovie();


