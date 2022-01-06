import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Medicos } from "./medicos.entity";
import { Especialidades } from "./especialidades.entity";

@Index("medicoid", ["medicoid"], {})
@Index("medicos_especialidades_ibfk_2", ["especialidade"], {})
@Entity("medicos_especialidades")
export class MedicosEspecialidades {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "especialidade", length: 50, unique: true })
  especialidade: string;

  @Column("int", { name: "medicoid", select: false })
  medicoid: number;

  @ManyToOne(() => Medicos, (medicos) => medicos.especialidades, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "medicoid", referencedColumnName: "id" }])
  medico: Medicos;

  @ManyToOne(() => Especialidades, (especialidades) => especialidades.medicosEspecialidades, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "especialidade", referencedColumnName: "especialidade" },
  ])
  medico_especialidade: Especialidades;
}
