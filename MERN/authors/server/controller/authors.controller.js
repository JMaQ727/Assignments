const Authors = require("../model/authors.model");

module.exports.getAllAuthors = (req, res) => {
    Authors.find()
        .then(allAuthors => {
            res.json({results: allAuthors})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.getOneAuthor = (req, res) => {
    Authors.findOne({_id: req.params.id})
        .then(oneAuthor => {
            res.json({ results: oneAuthor })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.createAuthor = (req, res) => {
    Authors.create(req.body)
        .then(newAuthor => {
            res.json ({ results: newAuthor})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.updateAuthor = (req, res) => {
    Authors.updateOne(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedAuthor => {
            res.json({results: updatedAuthor})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}

module.exports.deleteAuthor = (req, res) => {
    Authors.deleteOne({_id: req.params.id})
        .then(deletedAuthor => {
            res.json({results: deletedAuthor})
        })
        .catch(err => res.json({ message: "Something went wrong", error: err}))
}