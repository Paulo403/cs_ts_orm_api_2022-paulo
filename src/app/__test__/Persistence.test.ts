import {app, setup} from "../../index"
import { afterAll, describe, expect, test } from "@jest/globals";
import supertest from "supertest";
import { getConnection} from "typeorm"

describe("persistence test", () => {

    afterAll(async () => {
        await getConnection().close()
    });

    beforeAll(async () => {
        await setup()
    });

    it('testes /patentes/list e /patentes/delete', async () => {
        var agent = supertest(app);
        const postList = await agent.get('/patentes');
        expect(postList.statusCode).toEqual(200);
        if (postList.body.length > 0){
        for(const p of postList.body){
           
            const data = { "id" : p.id };
            console.log("Encontrou a patente: ");
            console.log(data);
            
            const postDelete = await agent.delete('/patentes').send(data);
            
            console.log("Removeu a patente: ");
            console.log(data);

            expect(postDelete.statusCode).toEqual(204);
        }
        }else{
            const data = { "nome" : "Patente de testes", "cor" :"Patente de testes" };
            const postCreate = await agent.post('/patentes').send(data);
            
            console.log("Cadastrou a patente: ");
            console.log(postCreate);

            expect(postCreate.statusCode).toEqual(200);
        }
    });

    it('testes /enderecos/list e /enderecos/delete', async () => {
        var agent = supertest(app);
        const postList = await agent.get('/enderecos');
        expect(postList.statusCode).toEqual(200);
        if (postList.body.length > 0){
        for(const e of postList.body){
           
            const data = { "id" : e.id };
            console.log("Encontrou o endereco: ");
            console.log(data);
            
            const postDelete = await agent.delete('/enderecos').send(data);
            
            console.log("Removeu o endereco: ");
            console.log(data);

            expect(postDelete.statusCode).toEqual(204);
        }
        }else{
            const data = { "cep" : "Endereco", "complemento" :"402" };
            const postCreate = await agent.post('/enderecos').send(data);
            
            console.log("Cadastrou o endereco: ");
            console.log(postCreate);

            expect(postCreate.statusCode).toEqual(200);

            const postDelete = await agent.delete('/endereco').send(data);
            
            console.log("Removeu o endereco: ");
            console.log(data);

            expect(postDelete.statusCode).toEqual(204);
        }
    });

    it('testes /jogadores/list e /jogadores/delete', async () => {
        var agent = supertest(app);
        const ret = await agent.get('/jogadores');
        expect(ret.statusCode).toEqual(200);

        if (ret.body.length > 0){
            console.log(`Encontrou ${ret.body.length} jogadores cadastrados.`);
            
            for(const p of ret.body){
            
                const data = { "nickname" : p.nickname };
                console.log(`Removendo o jogador ${data.nickname}.`);
                const postDeleteJogador = await agent.delete('/jogadores').send(data);
                expect(postDeleteJogador.statusCode).toEqual(204);
                if(typeof p.jogador != 'undefined'){

                    console.log(`Removendo o jogador ${p.jogador.nickname}.`);
                    const postDeleteJogador = await agent.delete('/jogadores').send({ "nickname" : p.jogador.nickname});
                    expect(postDeleteJogador.statusCode).toEqual(204);
                }
                
            }
        }else{
            console.log("Não encontrou jogadores cadastrados, cadastrando novo jogador, endereco e patente.");

            const postCreateEndereco = await agent.post('/enderecos').send({"cep" : "99010010", "complemento" : "casa"});
            expect(postCreateEndereco.statusCode).toEqual(200);
            const postFindEndereco = await agent.get('/enderecos').send({"cep" : "99010010", "complemento" : "casa"});
            expect(postFindEndereco.statusCode).toEqual(200);

            const postCreatePatente = await agent.post('/patentes').send({"nome" : "patente de teste", "cor" : "cor de teste"});
            expect(postCreatePatente.statusCode).toEqual(200);
            const postFindPatente = await agent.get('/patentes').send({"nome" : "patente de teste", "cor" : "cor de teste"});
            expect(postFindPatente.statusCode).toEqual(200);

            console.log(postFindEndereco.body);
            const data = {"nickname": "t@g1.com",
                          "senha": "11111",
                          "pontos": 10,
                          "endereco" : [{"id":postFindEndereco.body[0]}],
                          "patente" : [{"id":postFindPatente.body[0]}]
                        };

            const postCreateJogador = await agent.post('/jogadores').send(data);
            expect(postCreateJogador.statusCode).toEqual(200);

            const postDeleteJogador = await agent.delete('/jogadores').send(data);
            
            console.log("Removeu o jogador: ");
            console.log(data);

            expect(postDeleteJogador.statusCode).toEqual(204);
        }
        });





});

