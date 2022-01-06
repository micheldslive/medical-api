import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicosController } from 'src/controllers/medicos.controller';

import { Medicos } from 'src/entities/medicos.entity';
import { MedicosService } from 'src/services/medicos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Medicos])],
  providers: [MedicosService],
  controllers: [MedicosController],
})
export class MedicosModule {}
