const app = require("./Src/server");

const puerto = 3000;

app.listen(puerto, ()=>{ 
    `Servidor levantado en ${puerto}`
});
