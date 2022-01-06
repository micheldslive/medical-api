import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MedicosEspecialidades } from "src/entities/mespecialidades.entity";

@Injectable()
export class MedicosEspecialidadesService {
    constructor(
        @InjectRepository(MedicosEspecialidades)
        private mespecialidadesRepository: Repository<MedicosEspecialidades>
    ){}

    findAll(): Promise<MedicosEspecialidades[]> {
        return this.mespecialidadesRepository.find();
    }

    findOne(id: string): Promise<MedicosEspecialidades> {
        return this.mespecialidadesRepository.findOne(id);
    }

    createMedicosEspecialidades(mespecialidades: MedicosEspecialidades): Promise<MedicosEspecialidades> {
        return this.mespecialidadesRepository.save(mespecialidades);
    }

    updateMedicosEspecialidades(id: string, especialidade: MedicosEspecialidades): Promise<any> {
        return this.mespecialidadesRepository.update(id, especialidade);
    }

    deleteOne(id: string) {
        return this.mespecialidadesRepository.delete(id);
    }
}