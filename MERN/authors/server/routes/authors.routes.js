const AuthorsController = require('../controller/authors.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorsController.getAllAuthors);
    app.get('/api/authors/:id', AuthorsController.getOneAuthor);
    app.post('/api/authors', AuthorsController.createAuthor);
    app.put('/api/authors/:id', AuthorsController.updateAuthor);
    app.delete('/api/authors/:id', AuthorsController.deleteAuthor);
}