
const axios = require('axios');
const tittulo = document.getElementById('titulo');
const year = document.getElementById('Año');
const director = document.getElementById('director');
const duracion = document.getElementById('duracion');
const puntuacion = document.getElementById('puntuacion');
const imagen = document.getElementById('poster');
const imgFondo = document.getElementById('imgFondo');
const options = document.getElementById('options');

const btnSubmit = document.getElementById('btn-enviar')
const btnReset = document.getElementById('reset')


const genres = ['Action', 'Comedy', 'Horror', 'Adventure', 'Drama', 'Comedy-Romance', 'Mystery', 'Sci-Fi', 'Romance']

function renderGeneros() {
    options.innerHTML = '';

    for(const genre of genres) {
        const input = document.createElement('input')
        const label = document.createElement('label')

        input.type = "checkbox"
        input.id = genre
        input.name = "genre[]"
        input.value = genre

        label.htmlFor = genre;
        label.textContent = genre;

        options.appendChild(input)
        options.appendChild(label)
    };
    return options;
}

renderGeneros();


function validacionesCheckboxes(){
    const checkboxes = document.querySelectorAll('input[name="genre[]"]');
    const genres = [];
    for (const item of checkboxes) {
        if(item.checked){
            item.classList.add('selected');
            genres.push(item.value);
        }
    }
    return genres;
}
//BOTON DE ENVIAR
function handlerSubmit(event) {
    event.preventDefault();


    const genres = validacionesCheckboxes();
    if (![tittulo.value, year.value, director.value, duracion.value, puntuacion.value, imagen.value, imgFondo.value, genres].every(Boolean)) {
        alert('Faltan llenar campos');
        return;
    }

    const formData = {
        title: tittulo.value,
        year: year.value,
        director: director.value,
        duration: duracion.value,
        genre: genres,
        rate: puntuacion.value,
        poster: imagen.value,
        imgFondo: imgFondo.value,
    };

    // Enviar la solicitud POST al backend
    axios.post('http://localhost:3000/movies', formData)
        .then(response => {
            alert('La película se ha enviado exitosamente');
        })
        .catch(error => {
            console.error('Error al enviar la película:', error);
            alert('Ha ocurrido un error al enviar la película');
        });
}

btnSubmit.addEventListener('click', handlerSubmit);

function limpiarFormulario() {
    tittulo.value = '';
    year.value = '';
    director.value = '';
    duracion.value = '';
    puntuacion.value = '';
    imagen.value = '';
    imgFondo.value = '';
}
btnReset.addEventListener('click', limpiarFormulario);


// module.exports = dataAjson;









