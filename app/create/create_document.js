var MongoClient = require('mongodb').MongoClient
var assert      = require('assert');

// Connection url
var url = 'mongodb://localhost:27017/randoms';

// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
  
  assert.equal(err, null);

  // Create a collection we want to drop later
  var col = db.collection('numbers');
  
  // Insert a bunch of documents
  var number = Math.random();
  col.insert({ "number" : number }, {w:1}, function(err, result) {
    assert.equal(null, err);
    db.close();
  });
});