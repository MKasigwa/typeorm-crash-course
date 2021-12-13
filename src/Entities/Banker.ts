import { Column, Entity } from "typeorm";
import { Person } from "./utils/Person";

@Entity()
export class Banker extends Person {
  @Column({ unique: true, length: 10 })
  cardNumber: string;
}
