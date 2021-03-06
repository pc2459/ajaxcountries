var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/countries');

// Seed the database
require('./models/countriesSeed.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/countries', indexController.getCountries);
app.post('/search', indexController.getSearch);
app.post('/markvisited', indexController.markVisited);

var server = app.listen(6682, function() {
	console.log('Express server listening on port ' + server.address().port);
});
