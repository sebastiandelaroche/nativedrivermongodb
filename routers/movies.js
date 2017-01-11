
var express = require('express'),
	router = express.Router(),
	mongodb = require('../mongodb/mongodb');


router.get('/', function(req, res) {

	mongodb.connection("movies", function(err, collection) {

		collection.find({}).toArray(function(err, docs) {
			res.render("movies/list", {movies: docs})
		})
	})	
});


router.post('/', function(req, res) {

	mongodb.connection("movies", function(err, collection) {

		collection.save({name: req.body.name})
		res.redirect('/movies');
		
	})
});

module.exports = router;
