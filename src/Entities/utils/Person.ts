import { BaseEntity, Column } from "typeorm";
import { TestBaseEntity } from "./TestBaseEntity";

export abstract class Person extends TestBaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;
}
