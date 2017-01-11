
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

var clientMongoDB = {};

clientMongoDB.connection = function (collection, callback) {

	MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
		assert.equal(null, err);
		callback(err, db.collection(collection));
	})
}


module.exports = clientMongoDB;