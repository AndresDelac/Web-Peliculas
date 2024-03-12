const express = require("express");
const peticionController = require("./controllers/peticionController");
const app = express();


app.get('/movies', peticionController)

module.exports = app;