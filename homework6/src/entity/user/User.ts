import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Relation,
  Index,
} from "typeorm";

Entity("users");

export class User {
  @PrimaryGeneratedColumn("increment")
  user_id: number;

  @Index()
  @Column("text")
  name: string;

  @Column("text")
  email: string;

  @Column("integer")
  age: number;
}
