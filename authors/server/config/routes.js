//example
var authors = require('./../controllers/authors.js');
var path = require('path');
module.exports = function(app){
    app.get('/api/authors', authors.index);
    app.post('/api/new', authors.create);
    app.get('/api/edit/:id', authors.show);
    app.delete('/api/delete/:id', authors.delete);
    app.put('/api/edit/:id', authors.update);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
}