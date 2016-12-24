const dbName = process.argv[2] || 'Eugene';
const collection = process.argv[3] || 'users';
const entityId = process.argv[4] || '0';

console.log(dbName, collection, entityId);

const mongo = require('mongodb').MongoClient;
mongo.connect(`mongodb://localhost:27017/${dbName}`, (err, db) => {
  if (err) throw err;

  const collection = db.collection(collection);

  collection.deleteOne({_id: entityId}, (err, res) => {
    console.log(res);
    db.close();
  });
});
