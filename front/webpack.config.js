module.exports = {
    entry: {
        index: "./scripts/index.js",
        form : './scripts/formulario.js'
},

    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },
};