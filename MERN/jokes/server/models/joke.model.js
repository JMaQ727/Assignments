const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true,"Setup must be at least 10 characters"],
        minlength: [10, "Setup msut be at least 10 characters"],
    },
    punchline: {
        type: String,
        required: [true, "Punchline must be at least 3 characters"],
        minlength: [3, "Punchline must be at least 3 characters"],
    },
    },
    {timestamps: true}
)

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;