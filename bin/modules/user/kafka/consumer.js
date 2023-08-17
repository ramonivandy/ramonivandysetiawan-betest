const { Kafka } = require('kafkajs')
const config = require('../../../helper/global_config');
const kafkaHost = `${config.get("/kafka/host")}:${config.get("/kafka/port")}`
const groupId = config.get("/kafka/groupId") || "my-app-group-id";
const topic = config.get("/kafka/topic") || "my-app-topic";
const handler = require('../api_handler')

const kafka = new Kafka({
  clientId: config.get("/kafka/clientId"),
  brokers: [kafkaHost]
})

const consumer = kafka.consumer({ groupId: groupId })

const runConsumerUser = async () => {
  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: topic, fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const value = JSON.parse(message.value.toString())
        const result = handler.createUserConsumer(value);
      } catch (error) {
        console.log('error parse json')
      }
    },
  })
}

module.exports = { runConsumerUser }