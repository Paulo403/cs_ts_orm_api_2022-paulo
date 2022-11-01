import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_compra')
class Compra {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("date")
    data: Date;

    @Column("float")
    total: number;

}
export default Compra;