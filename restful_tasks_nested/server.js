var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/restful_task_918');

require('./server/config/mongoose.js');

app.use(express.static( __dirname + '/public/dist/public' ));

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
    console.log('on port 8000');
})