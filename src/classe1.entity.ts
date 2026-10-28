import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('aluno')
export class Aluno {
     @PrimaryGeneratedColumn()
     id!:number;

     @Column({length:100})
     nome!:string;

     @Column({length:150, unique:true})
     cpf!: string;

     @Column({length:150, unique:true})
     email!: string;

     @Column({type:'int'})
     telefone!:number;

     @Column({type:'int'})
     endereco!:number; 

     @Column ({default:true})
     ativo!: boolean; 
        
}
