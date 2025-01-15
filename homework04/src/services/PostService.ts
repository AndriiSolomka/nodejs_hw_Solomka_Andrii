import { Db, ObjectId, WithId } from "mongodb";
import { db } from "./DatabaseService";
import collections from "../dbCollectionsNames/dbCollectionsName";
import { Post } from "../interfaces/postInterface";

const { posts } = collections;

class PostService {
  private db: Db;

  constructor(db: Db) {
    this.db = db;
  }

  async createPost(data: Post) {
    const result = await this.db.collection(posts).insertOne({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return { _id: result.insertedId, ...data };
  }

  async getAllPosts(filters: Record<string, any> = {}) {
    const result = await this.db.collection(posts).find(filters).toArray();
    return result;
  }

  async getOnePost(id: string) {
    const result = await this.db
      .collection(posts)
      .findOne({ _id: new ObjectId(id) });
    return result;
  }

  async updatePost(id: string, data: Partial<Post>) {
    const result = await this.db
      .collection(posts)
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: data },
        { returnDocument: "after" },
      );
    return result?.value;
  }

  async deletePost(id: string) {
    const result = await this.db
      .collection(posts)
      .deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }
}

export const postService = new PostService(db);
