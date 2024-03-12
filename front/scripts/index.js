const axios = require('axios')

const renderPeliculas = require('./renderPeliculas')

const getMovie = () => {
    axios.get('https://students-api.up.railway.app/movies')
    .then(({data})=> data.forEach(renderPeliculas))
    .catch((error)=> console.log(error.message));
}

getMovie();


