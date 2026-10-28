import { TypeOrmModule } from "@nestjs/typeorm";
import {
    Entity,
    PrimaryGeneratedColumn, 
    Column
} from 'typeorm';

@Entity('aluno')
export class Aluno{

     @PrimaryGeneratedColumn()
     id!:number;

     @Column({type:'int'})
     nomePopular!:string;

     @Column({type:'int'})
     nomeCientifico!: string;

     @Column({type:'int'})
     descricao!: string;

     @Column({type:'int'})
     domestico!:string;

     @Column({default:true})
     ativo!:boolean 
}
