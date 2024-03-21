const contenedorPeliculas = document.getElementById('contenedorP');
const sectionContenedorP = document.getElementById('contenedorP');

function renderPeliculas(peli) {
    const elemetoPeli = document.createElement('article');
    elemetoPeli.classList.add('peliculas');
    
    elemetoPeli.innerHTML = `
        <img src="${peli.poster}" alt="${peli.title}">
        <div class="info-adicional">
            <h3>${peli.title} (${peli.year})</h3>
            <p>Dirigida por: ${peli.director}</p>
            <p>Duración: ${peli.duration}</p>
            <p>${peli.genre.join(', ')}</p>
            <p>${peli.rate}</p>
        </div>
    `;

    elemetoPeli.addEventListener('mouseover', function() {
        sectionContenedorP.style.backgroundImage = `url(${peli.imgFondo})`;
        sectionContenedorP.style.backgroundRepeat = 'no-repeat';
        sectionContenedorP.style.backgroundSize = 'cover';
    });
    
    elemetoPeli.addEventListener('mouseout', function() {
        sectionContenedorP.style.backgroundImage = 'url("./assets/Imagenes/GettyImages-898266112.jpg")';
        sectionContenedorP.style.backgroundRepeat = 'no-repeat';
        sectionContenedorP.style.backgroundSize = 'cover';
    });

    
    contenedorPeliculas.appendChild(elemetoPeli);
    
    return elemetoPeli; 
}
module.exports = renderPeliculas;
