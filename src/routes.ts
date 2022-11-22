import {Router} from 'express';
import JogadorController from  './app/controllers/JogadorController';
import EnderecoController from './app/controllers/EnderecoController';
import PatenteController from './app/controllers/PatenteController';
import LoginController from './app/controllers/LoginController';

const router = Router();

//criando  rotas para /jogadores.
router.post('/jogadores', JogadorController.store);//define uma rota vai método post para chamar o método store da classe JogadorController
router.get('/jogadores', JogadorController.list);//define uma rota ...
router.put('/jogadores', JogadorController.update);//define uma rota ...
router.delete('/jogadores', JogadorController.delete);//define uma rota ...

//criando  rotas para /enderecos.
router.post('/enderecos', EnderecoController.store);//define uma rota vai método post para chamar o método store da classe EnderecoController
router.get('/enderecos', EnderecoController.list);//define uma rota ...
router.delete('/enderecos', EnderecoController.delete);//define uma rota ...
router.put('/enderecos', EnderecoController.update);
router.post('/enderecos/find', EnderecoController.find);
router.post('/enderecos/delete', EnderecoController.delete);

// criando rotas para /patentes
router.post('/patentes', PatenteController.store);
router.get('/patentes', PatenteController.list);
router.delete('/patentes', PatenteController.delete);
router.put('/patentes', PatenteController.update);

// criando rotas para login
router.post('/jogadores/login', LoginController.post);

export default router;

