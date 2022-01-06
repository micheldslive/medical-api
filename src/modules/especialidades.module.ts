import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecialidadesController } from 'src/controllers/especialidades.controller';

import { Especialidades } from 'src/entities/especialidades.entity';
import { EspecialidadesService } from 'src/services/especialidades.service';

@Module({
  imports: [TypeOrmModule.forFeature([Especialidades])],
  providers: [EspecialidadesService],
  controllers: [EspecialidadesController],
})
export class EspecialidadesModule {}
