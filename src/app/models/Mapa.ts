import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_mapa')
class Mapa {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("text")
    nome: string;
}
export default Mapa;