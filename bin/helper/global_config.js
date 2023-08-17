require('dotenv').config();
const confidence = require('confidence');

const config = {
  port: process.env.PORT || 3001,
  mongodb_url: process.env.MONGO_DATABASE_URL,
  mongodb_db_name: process.env.MONGO_DATABASE_NAME,
  kafka: {
    host: process.env.KAFKA_HOST,
    port: process.env.KAFKA_PORT,
    topic: process.env.KAFKA_TOPIC,
    clientId: process.env.KAFKA_CLIENT_ID,
    groupId: process.env.KAFKA_GROUP_ID
  }
};

const store = new confidence.Store(config);
exports.get = key => store.get(key);
