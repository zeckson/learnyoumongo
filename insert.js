const firstName = process.argv[2] || 'Eugene';
const lastName = process.argv[3] || 'Shchepotev';

const mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err) throw err;

  const users = db.collection('users');
  let user = {
    firstName, lastName
  };
  users.insertOne(user, (err, data) => {
    if(err) throw err;
    console.log(JSON.stringify(user));
    db.close();
  });

});

