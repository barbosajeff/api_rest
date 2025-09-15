import {Router} from 'express';

import {StatusCodes} from 'http-status-codes';
import {CidadesController} from './../controllers'

const router = Router ();


//Router de Teste
router.get('/' , (_, res) => {
  return res.send('Olá Dev');
});

//criar Cidade
router.post('/cidades/', CidadesController.create);











export {router};