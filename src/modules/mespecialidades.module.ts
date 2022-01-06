import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicosEspecialidadesController } from 'src/controllers/mespecialidades.controller';

import { MedicosEspecialidades } from 'src/entities/mespecialidades.entity';
import { MedicosEspecialidadesService } from 'src/services/mepecialidades.service';

@Module({
  imports: [TypeOrmModule.forFeature([MedicosEspecialidades])],
  providers: [MedicosEspecialidadesService],
  controllers: [MedicosEspecialidadesController],
})
export class MedicosEspecialidadesModule {}
