const MongoClient = require('mongodb').MongoClient;
const config = require("../../../helper/global_config");
const uri = config.get('/mongodb_url');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = { connectToDatabase, client };
