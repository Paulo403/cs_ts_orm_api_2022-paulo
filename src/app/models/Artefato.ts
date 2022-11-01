import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_artefato')
class Artefato {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("varchar")
    nome: string;

    @Column("float")
    peso: number;

    @Column("float")
    valor: number;
}
export default Artefato;