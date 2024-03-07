
const contenedorPeliculas = document.getElementById('contenedorP');
function renderPeliculas(peli) {

    const tarjetaPeli = document.createElement('div');
    tarjetaPeli.classList.add('peliculas');
    tarjetaPeli.innerHTML = `
    
    <img src="${peli.poster}" alt="peli.title">
    <h3>${peli.title} (${peli.year})</h3>
    <p>Dirigida por: ${peli.director}</p>
    <p>Duracion: ${peli.duration}</p>
    <p>${peli.genre.join(', ')}</p>
    <p>${peli.rate}</p>

    `;
    contenedorPeliculas.appendChild(tarjetaPeli);

    return tarjetaPeli;
    
}
module.exports = renderPeliculas;