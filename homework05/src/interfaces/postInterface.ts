import { ObjectId } from "mongodb";

export interface IPost {
  authorId: ObjectId;
  title: string;
  content: string;
  status: "draft" | "published" | "archived";
  createdAt: Date;
  updatedAt: Date;
}
