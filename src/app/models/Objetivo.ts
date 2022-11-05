import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import Local from '../models/Local'
@Entity('tb_objetivo')
export default class Objetivo {
    @PrimaryGeneratedColumn()//geracao automatica de chave primaria
    id: number;

    @Column("varchar")
    descricao: string;

    @Column("integer")
    pontos: number;

    @ManyToMany(() => Local)
    @JoinTable({name : "tb_objetivo_local", joinColumn: {name:"objetivo_id", referencedColumnName: "id"}, inverseJoinColumn: {name:"local_id", referencedColumnName: "id"}})
    locais: Local[];
}