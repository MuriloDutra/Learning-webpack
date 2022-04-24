const path = require('path')
const outputPath = path.resolve(__dirname, 'app/dist')//It gets the path since your system root until your current directory

module.exports = {
    entry: './app/src/js/app.js',//Entry point of this application
    output: {
        filename: 'bundle.js',//Here you can put any name you want
        path: outputPath//This is the location where the bundle is gonna be stored
    },
};