import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MedicosEspecialidades } from "./mespecialidades.entity";

@Entity("medicos")
export class Medicos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nome", length: 120, })
  nome: string;

  @Column("varchar", { name: "crm", length: 7, })
  crm: string

  @Column("varchar", { name: "telefone_fixo", length: 10, })
  telefone_fixo: string;

  @Column("varchar", { name: "telefone_celular", length: 11, })
  telefone_celular: string;

  @Column("varchar", { name: "cep", length: 8, })
  cep: string;

  @OneToMany(
    () => MedicosEspecialidades,
    (medicosEspecialidades) => medicosEspecialidades.medico
  )
  especialidades: MedicosEspecialidades[];
}
