var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var path = require('path');



app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(__dirname + "/client/static"));


// var routes_setter = require('./server/config/routes.js');
// routes_setter(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
    });




app.listen(4200, function () {
    console.log("listening on port 4200");
})