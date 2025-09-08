import {Router} from 'express';

import {StatusCodes} from 'http-status-codes';

const router = Router ();




router.post('/teste', (req,res)=> {
  console.log(req.body)
    //retornar dado comuns 
    //return res.send(req.body);

    //retornar JSon
    return res.json(req.body);
});

router.post('/teste/:id', (req,res)=> {
  console.log(req.params.id)


    //retornar JSon
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});











export {router};