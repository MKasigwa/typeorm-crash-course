import { Column, Entity } from "typeorm";
import { Person } from "./utils/Person";

@Entity()
export class Clients extends Person {
  @Column({ unique: true, length: 10 })
  cardNumber: string;

  @Column({ type: "numeric" })
  balance: number;

  @Column({ name: "active", default: true })
  isActive: boolean;

  @Column({ type: "simple-json", nullable: true })
  additionalInfo: {
    age: number;
    hairColor: string;
  };

  @Column({ type: "simple-array", default: [] })
  familityMembers: string[];
}
