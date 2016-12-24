const age = parseInt(process.argv[2], 10) || 0;

const mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {

  db.collection('parrots').find({age: {$gt: age}}, {name: 1, age: 1, _id: 0}).toArray((err, docs) => {
    console.log(docs);
  });

  db.close();
});

