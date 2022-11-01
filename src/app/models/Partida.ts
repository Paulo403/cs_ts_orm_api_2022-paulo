import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_partida')
class Partida {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("date")
    inicio: Date;

    @Column("date")
    fim: Date;
}
export default Partida;