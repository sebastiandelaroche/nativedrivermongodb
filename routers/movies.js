
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

	var response = {response: { message: "Se ha creado exitosamente la pelicula." }};
	console.log(req.body.name);
	if(typeof req.body.name === "undefined" || req.body.name.length === 0) {
		response.response.message = "El campo nombre es obligatorio.";
		res.status(500).json(response);
		return;
	}

	mongodb.connection("movies", function(err, collection) {
		collection.save({name: req.body.name});
		res.status(200).json(response);
	});
});

module.exports = router;
