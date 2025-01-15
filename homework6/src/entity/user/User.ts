import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Index,
} from "typeorm";
import { Post } from "../post/Post";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  user_id: number;

  @Index()
  @Column("text")
  name: string;

  @Column("text", { nullable: false, default: "Unnamed" })
  email: string;

  @Column("integer")
  age: number;

  @OneToMany(() => Post, (post) => post.user, { cascade: true })
  posts: Post[];
}
