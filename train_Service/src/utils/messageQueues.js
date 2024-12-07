const amqplib = require('amqplib');

const { MESSAGE_BROKER_URL, EXCHANGE_NAME } = require('../config/serverConfig');

const createChannel = async () => {
  try {
    const connection = await amqplib.connect(MESSAGE_BROKER_URL);
    const channel = await connection.createChannel();

    //message broker also helps to distribute messages amoung the queues
    await channel.assertExchange(EXCHANGE_NAME, 'direct', false);
    return channel;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const subscribeMessage = async (channel, service, binding_key) => {
  //we first assert queue into channel
  try {
    const applicationQueue = await channel.assertQueue('REMINDER_SERVICE');
    //bind queue to service
    channel.bindQueue(applicationQueue.queue, EXCHANGE_NAME, binding_key);

    channel.consume(applicationQueue.queue, (msg) => {
      console.log('received message');
      console.log(msg.content.toString());
      channel.ack(msg);
    });
  } catch (error) {
    throw error;
  }
};
const publishMessage = async (channel, binding_key, message) => {
  try {
    await channel.assertQueue('REMINDER_SERVICE');

    await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
  } catch (error) {
    throw error;
  }
};

module.exports = { subscribeMessage, createChannel, publishMessage };
