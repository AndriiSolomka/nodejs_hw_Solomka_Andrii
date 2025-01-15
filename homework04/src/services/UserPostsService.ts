import { Db, ObjectId, WithId } from "mongodb";
import { db } from "./DatabaseService";
import collections from "../dbCollectionsNames/dbCollectionsName";
import { Post } from "../interfaces/postInterface";

const { posts } = collections;

class UserPostsService {
  private db: Db;

  constructor(db: Db) {
    this.db = db;
  }

  async getUserPosts(user_id: string) {
    const result = await this.db
      .collection(posts)
      .find({ authorId: user_id })
      .toArray();
    return result;
  }

  async updateUserPosts(user_id: string, data: Partial<Post>) {
    const result = await this.db
      .collection(posts)
      .findOneAndUpdate(
        { authorId: new ObjectId(user_id) },
        { $set: data },
        { returnDocument: "after" },
      );
    return result;
  }

  async deleteUserPost(user_id: string) {
    const result = await this.db
      .collection(posts)
      .deleteOne({ authorId: user_id });
    return result.deletedCount > 0;
  }
}

export const userPostsService = new UserPostsService(db);
