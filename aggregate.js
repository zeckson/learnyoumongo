const size = process.argv[2];

const mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {

  db.collection('prices').aggregate([
    {$match: {size},},
    {
      $group: {
        _id: 'average',
        average: {$avg: '$price'}
      }
    }], (err, result) => {
    console.log(Number(result[0].average).toFixed(2));
    db.close();
  });
});

