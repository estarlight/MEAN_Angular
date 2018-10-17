
var products = require('./../controllers/products.js');
var path = require('path');

module.exports = function(app){
    app.get('/api/products', products.index);
    app.get('/api/products/edit/:id', products.show);
    app.put('/api/products/edit/:id', products.update);
    // app.get('/api/products/new', products.create);
    app.post('/api/products/new', products.create);
    app.delete('/api/products/delete/:id', products.delete);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
}