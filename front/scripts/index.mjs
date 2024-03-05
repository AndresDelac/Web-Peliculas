import tempData from "./tempData.mjs";

const contenedorPeliculas = document.getElementById('contenedorP');

const creadorDeCartas = tempData.map(elemento => {

    const contenedor = document.createElement('div')
    contenedor.classList.add('peliculas');

    const imagen = document.createElement('img')
    imagen.src = elemento.poster;

    const titulo = document.createElement('h3')
    titulo.textContent = `Titulo : ${elemento.title}` ;

    const año = document.createElement('p')
    año.innerText = `Año : ${elemento.year}`

    const director = document.createElement('p')
    director.textContent =  `Director : ${elemento.director}`;

    const duracion = document.createElement('p')
    duracion.textContent = `Duracion : ${elemento.duration}`

    const genero = document.createElement('p') 
    genero.textContent = `Generos : ${elemento.genre.join(', ')}`

    const calificacion = document.createElement('p')
    calificacion.textContent = elemento.rate;



    contenedor.appendChild(imagen);
    contenedor.appendChild(titulo);
    contenedor.appendChild(año);
    contenedor.appendChild(director);
    contenedor.appendChild(duracion);
    contenedor.appendChild(genero);
    contenedor.appendChild(calificacion);
    
    
    return contenedor;

});

creadorDeCartas.forEach(tarjeta => {
    contenedorPeliculas.appendChild(tarjeta);
});




console.log('hola');

