/*
Instructions for creating a project:
    1. create project folder
    2. create subfolders (routes, model, config, controller) and server.js
    3. npm install express mongoose
    4. npx create-react-app client 
    5. cd into client -> npm install axios cors react-router-dom@5 -> npm start
    6. copy mongoose.config file over and edit db name
    7. setup server.js file -> nodemon server.js
    8. create model
    9. create controller/routes then test with postman 
    10. start creating the react portion
    */

//server.js
const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

require("./server/config/mongoose.config")
require("./server/routes/___.routes")(app)
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );

//model 
const mongoose = require('mongoose');

const ____Schema = new mongoose.Schema({

})

const ____ = mongoose.model('____', ____Schema);
module.exports = ____;

//controller
const ____ = require("../model/____.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
//routes
const _____Controller = require('../controller/controller.file.name');
module.exports = function(app){
    app.get('/api', _____Controller.index);
}