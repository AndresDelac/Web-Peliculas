const app = require("./Src/server");
const dbConnection = require('./Src/config/dbConnection')

const PORT = 3000;

dbConnection()
.then(() => {
    app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))
}).catch((err) => console.log('Tenemos problemas con la conexion a la DB'));


