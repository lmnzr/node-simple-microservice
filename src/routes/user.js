import {Router} from 'express';
let router = Router();
import {publishToQueue} from '../services/mqService';

router.post('/msg',async(req,res,next)=>{
    let {queueName,payload} = req.body;
    await publishToQueue(queueName,payload);
    res.statusCode = 200;
    res.data = {"message_sent":true};
    next();
})

export default router;