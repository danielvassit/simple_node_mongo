var MongoClient = require('mongodb').MongoClient
var assert      = require('assert');

// Connection url
var url = 'mongodb://localhost:27017/randoms';

// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
  
  assert.equal(err, null);

  // Use collection
  var col = db.collection('numbers');
  
  // Show all documents
  var array = col.find({}).toArray(function(err, docs) {
      
      assert.equal(err, null);
      assert.notEqual(docs.length, 0);

      docs.forEach(function(doc){
        console.log(doc);
      });

      db.close();
  });

});