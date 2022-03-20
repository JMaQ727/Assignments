const JokeController = require("../controller/joke.controller");
const Joke = require("../models/joke.model");

module.exports = (app) => {
    app.get('/api/jokes', JokeController.findAllJokes)
    app.get('/api/jokes/:id', JokeController.findOneJoke)
    app.post('/api/jokes', JokeController.createJoke)
    app.put('/api/jokes/:id', JokeController.updateJoke)
    app.delete('/api/jokes/:id', JokeController.deleteJoke)
}