import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Especialidades } from "src/entities/especialidades.entity";

@Injectable()
export class EspecialidadesService {
    constructor(
        @InjectRepository(Especialidades)
        private especialidadesRepository: Repository<Especialidades>
    ){}

    findAll(): Promise<Especialidades[]> {
        return this.especialidadesRepository.find();
    }

    findOne(id: string): Promise<Especialidades> {
        return this.especialidadesRepository.findOne(id);
    }

    createEspecialidades(especialidades: Especialidades): Promise<Especialidades> {
        return this.especialidadesRepository.save(especialidades);
    }

    updateEspecialidades(id: string, especialidade: Especialidades): Promise<any> {
        return this.especialidadesRepository.update(id, especialidade);
    }

    deleteOne(id: string) {
        return this.especialidadesRepository.delete(id);
    }
}