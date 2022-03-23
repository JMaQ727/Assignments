const ProductController = require("../controller/product.controller");

module.exports = (app) => {
    app.get('/api/product/', ProductController.findAllProducts)
    app.get('/api/product/:id', ProductController.findOneProduct)
    app.post('/api/product/', ProductController.createProduct)
    app.put('/api/product/:id', ProductController.updateProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct)
}