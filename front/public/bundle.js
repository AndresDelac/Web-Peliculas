(()=>{var e={306:e=>{const t=document.getElementById("contenedorP");e.exports=function(e){const n=document.createElement("div");return n.classList.add("peliculas"),n.innerHTML=`\n    \n    <img src="${e.poster}" alt="peli.title">\n    <h3>${e.title} (${e.year})</h3>\n    <p>Dirigida por: ${e.director}</p>\n    <p>Duracion: ${e.duration}</p>\n    <p>${e.genre.join(", ")}</p>\n    <p>${e.rate}</p>\n\n    `,t.appendChild(n),n}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{const e=n(306);fetch("https://students-api.2.us-1.fl0.io/movies").then((e=>e.json())).then((t=>t.forEach(e))).catch((e=>console.error("Error fetching movies:",e)))})()})();