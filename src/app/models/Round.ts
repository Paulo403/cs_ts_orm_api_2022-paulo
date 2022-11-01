import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_round')
class Round {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("integer")
    numero: number;

    @Column("date")
    inicio: Date;

    @Column("date")
    fim: Date;
}
export default Round;