const { MongoClient } = require('mongodb');

const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
// const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';
const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';
const DB_NAME = 'StoreManager';

module.exports = () => 
  MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
