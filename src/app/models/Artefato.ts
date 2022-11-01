import {Entity, Column, PrimaryGeneratedColumn, TableInheritance} from 'typeorm';
@Entity('tb_artefato')
@TableInheritance({ column: { type: "varchar", name: "type" } })
export default abstract class Artefato {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("varchar")
    nome: string;

    @Column("float")
    peso: number;

    @Column("float")
    valor: number;
}