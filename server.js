
// middleware
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert'),
	express = require('express'),
	app = express(),
	engines = require('consolidate'),
	path = require('path'),
	movies = require('./routers/movies'),
	bodyParser = require('body-parser');


// parser methods http for params
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

// config render engine
app.engine('html', engines.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// routers
app.use('/movies', movies);

// control error
app.use(function(req, res) {
	res.render("404", {});
});

// init server
var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log("Express server listening on port %s", port);
})
