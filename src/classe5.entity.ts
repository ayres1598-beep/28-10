import{
    Entity, 
    PrimaryGeneratedColumn, 
    Column
} from 'typeorm'

@Entity('aluno')
export class aluno{
    @PrimaryGeneratedColumn()
     id!:number;

     @Column({type:'int'})
     continente!:string;

     @Column({type:'int'})
     pais!: string;

     @Column({type:'int'})
     regiao!: string;

     @Column({type:'int'})
     descricao!:string;

     @Column({default:true})
     ativo!:boolean 
}