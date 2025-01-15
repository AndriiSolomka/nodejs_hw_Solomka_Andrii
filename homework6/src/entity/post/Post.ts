import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../user/User";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn("increment")
  post_id: number;

  @Column("text")
  title: string;

  @Column("text")
  content: string;

  @Column("text")
  status: string;

  @CreateDateColumn()
  createdat: Date;

  @UpdateDateColumn()
  updatedat: Date;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "user_id" })
  user: User;
}
