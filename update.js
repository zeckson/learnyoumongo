const name = process.argv[2] || 'Eugene';
const username = 'tinatime';

const mongo = require('mongodb').MongoClient;
mongo.connect(`mongodb://localhost:27017/${name}`, (err, db) => {
  if (err) throw err;

  const users = db.collection('users');

  users.updateOne({username}, {$set: {age: 40}}, () => {
    users.findOne({username}, (err, data) => {
      console.log(JSON.stringify(data));
      db.close();
    });
  });
});

