import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MedicosEspecialidades } from "./mespecialidades.entity";

@Index("especialidade", ["especialidade"], {})
@Entity("especialidades")
export class Especialidades {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "especialidade", length: 50, unique: true })
  especialidade: string;

  @OneToMany(
    () => MedicosEspecialidades,
    (medicosEspecialidades) => medicosEspecialidades.medico_especialidade
  )
  medicosEspecialidades: MedicosEspecialidades[];
}
