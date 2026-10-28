import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './aluno.entity.js';

@Module({
    imports: [
  TypeOrmModule.forFeature([Aluno])
 ]
})
export class AlunoModule{}