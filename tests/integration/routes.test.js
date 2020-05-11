require("@babel/register");
require("@babel/polyfill");
require('dotenv').config();

const request = require('supertest')
const app = require('../../src/app.js')
const mq = require('../../src/services/mqService')

let mqurl = process.env.RABBITMQ

beforeAll(async() => {
  await mq.startMQ(mqurl);
});

afterAll(async () => {
  await mq.closeMQ();
});

describe('Get Hello World', () => {
  it('should return 200 and return Hello World!', async done => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body.response).toEqual("Hello World!")
    done()
  })
})

describe('Get Not Found', () => {
  it('should return 404', async done => {
    const res = await request(app).get('/notfound')
    expect(res.statusCode).toEqual(404)
    done()
  })
})

describe('Sent Message', () => {
  it('should return 200 and return message_sent true',async done => {
    const res = await request(app)
    .post('/user/msg')
    .send({
      "queueName":"queue1",
      "payload":"hello world!"});
    expect(res.statusCode).toEqual(200)
    expect(res.body.response.message_sent).toEqual(true)
    done()
  })
})