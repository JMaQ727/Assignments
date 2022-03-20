const Joke = require("../models/joke.model");

module.exports.helloWorld = (req,res) =>{
    res.json({msg:"hello world!"})
}

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => {
            res.json({results: oneJoke})
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
        })
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(createdJoke => {
            res.json({results: createdJoke})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke=> {
            res.json({results: updatedJoke})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}