import "reflect-metadata";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicos } from "./entities/medicos.entity";
import { Especialidades } from "./entities/especialidades.entity";
import { MedicosEspecialidades } from "./entities/mespecialidades.entity";
import { MedicosModule } from './modules/medicos.module';
import { EspecialidadesModule } from "./modules/especialidades.module";
import { MedicosEspecialidadesModule } from "./modules/mespecialidades.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'root',
      password: 'medical123',
      database: 'postgres',
      entities: [Medicos, Especialidades, MedicosEspecialidades],
      migrations: [`${__dirname}/migrations/*{.ts,.js}`],
      cli: {
        migrationsDir: 'src/migration'
      },
      synchronize: true,
    }), MedicosEspecialidadesModule, MedicosModule, EspecialidadesModule
  ],
})
export class AppModule {}