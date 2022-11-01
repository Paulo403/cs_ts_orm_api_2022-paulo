import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_local')
class Local {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("integer")
    nome: number;

    @Column("integer")
    latitude: number;

    @Column("integer")
    longitude: number;
}
export default Local;