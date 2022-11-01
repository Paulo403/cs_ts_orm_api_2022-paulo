import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_objetivo')
class Objetivo {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("varchar")
    descricao: string;

    @Column("integer")
    pontos: number;
}
export default Objetivo;