import {Router} from 'express';

import {StatusCodes} from 'http-status-codes';
import {CidadesController} from './../controllers'

const router = Router ();




router.post('/teste', (req,res)=> {
  console.log(req.body)
    //retornar dado comuns 
    //return res.send(req.body);

    //retornar JSon
    return res.json(req.body);
});

router.post('/cidades/', CidadesController.create);











export {router};