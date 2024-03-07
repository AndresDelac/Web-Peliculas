const renderPeliculas = require('./renderPeliculas')


fetch('https://students-api.2.us-1.fl0.io/movies')
    .then(response => response.json())
    .then(data => data.forEach(renderPeliculas))
    .catch(error => console.error('Error fetching movies:', error));

    

