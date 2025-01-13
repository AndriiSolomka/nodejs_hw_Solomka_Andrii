import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Relation,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn("increment")
  post_id: number;

  @Index()
  @Column("int")
  author_id: number;

  @Column("text")
  title: string;

  @Column("text")
  content: string;

  @Column("text")
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
