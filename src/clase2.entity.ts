import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('aluno')
export class Aluno {

    @PrimaryGeneratedColumn()
    id!: Number;
    
     @Column({length:100, unique:true})
     nome!:string;

     @Column({type:'date', length:150})
     dataNasciemnto!: number;

     @Column({type:'int'})
     sexo!: string;

     @Column({type:'int'})
     peso!:number;

     @Column({type:'int'})
     cor!:string; 

      @Column({default:true})
     castrado!: boolean; 

     @Column ({default:true})
     ativo!: boolean; 
        
}

