import amqp from 'amqplib';

let ch = null;
let conn = null;

export const startMQ = async (url) => {
    conn = await amqp.connect(url)
    ch = await conn.createChannel();
}

export const closeMQ = async () => {
   await ch.close();
   await conn.close();
}

export const publishToQueue = async (queueName, data) => {
    ch.sendToQueue(queueName, new Buffer.from(data), {persistent: true});
}

process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});
