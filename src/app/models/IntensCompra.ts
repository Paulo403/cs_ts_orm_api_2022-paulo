import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_itensCompra')
class ItensCompra {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("text")
    quantidade: string;

    @Column("float")
    valor: number;
}
export default ItensCompra;