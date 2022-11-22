import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/Jogador';

class LoginController {

    async post(req: Request, res: Response){

        const repository = getRepository(Jogador);
        const {nickname, senha} = req.body;
        const end = await repository.findOne({where : {nickname}});
        if(end){
        return res.json(end);
        }else{
            return res.sendStatus(404);
        }
    }
}

export default new LoginController();