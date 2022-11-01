import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_resultado')
class Resultado {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    resultadoID: number;
}
export default Resultado;