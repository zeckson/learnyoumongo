const age = parseInt(process.argv[2], 10) || 0;

const mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {

  db.collection('parrots').count({age: {$gt: age}}).
      then((count) => {
        console.log(count);
        db.close();
      });
});

