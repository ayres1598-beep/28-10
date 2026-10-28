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

    @Column({length:100, unique:true})
     nomeRaça!:string;

     @Column({type:'int'})
     porte!: string;

     @Column({type:'int'})
     descricao!: string;

     @Column({type:'int'})
     expectativaVida!:number;

     @Column({default:true})
     ativo!:boolean 
}
