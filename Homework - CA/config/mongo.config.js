require('dotenv').config();
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI);
module.exports = client.connect().then(c => c.db(process.env.MONGO_DB));
