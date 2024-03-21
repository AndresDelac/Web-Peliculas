const mongoose = require('mongoose')

const URI ='mongodb+srv://hugoandres2205:lPji2Tg0mbGN0S4p@cluster01.ievqy5a.mongodb.net/miPrimeraChamba?retryWrites=true&w=majority&appName=Cluster01'

const dbConnection = async () => {
    await mongoose.connect(URI)
}

module.exports = dbConnection