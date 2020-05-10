require("@babel/register");
require("@babel/polyfill");
require('dotenv').config();
let rabbitMQ = require('./services/mqService')
let app = require('./app.js');

let port = process.env.PORT
let mqurl = process.env.RABBITMQ

rabbitMQ.startMQ(mqurl);

app.listen(port,()=>{
    console.log(`[SERVER] running on ${port}`);
});

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});
