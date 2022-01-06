import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Medicos } from "src/entities/medicos.entity";

@Injectable()
export class MedicosService {
    constructor(
        @InjectRepository(Medicos)
        private medicosRepository: Repository<Medicos>
    ){}

    findAll(): Promise<Medicos[]> {
        return this.medicosRepository.find({
            relations: ['especialidades']
        });
    }

    findOne(id: string): Promise<Medicos> {
        return this.medicosRepository.findOne(id);
    }

    createMedicos(medicos: Medicos): Promise<Medicos> {
        return this.medicosRepository.save(medicos);
    }

    updateMedicos(id: string, especialidade: Medicos): Promise<any> {
        return this.medicosRepository.update(id, especialidade);
    }

    deleteOne(id: string) {
        return this.medicosRepository.delete(id);
    }
}