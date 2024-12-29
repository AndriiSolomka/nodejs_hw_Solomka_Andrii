import { Db, ObjectId, WithId } from "mongodb";
import { db } from "./DatabaseService";
import collections from "../dbCollectionsNames/dbCollectionsName";
import { IUser } from "../interfaces/userInterface";

const { users } = collections;

class UserService {
  async;
  private db: Db;

  constructor(db: Db) {
    this.db = db;
  }

  async createUser(data: IUser) {
    const result = await this.db.collection(users).insertOne(data);
    return { _id: result.insertedId, ...data };
  }

  async getAllUsers(filters: Record<string, any> = {}) {
    const result = await this.db.collection(users).find(filters).toArray();
    return result;
  }

  async getOneUser(id: string) {
    const result = await this.db
      .collection(users)
      .findOne({ _id: new ObjectId(id) });
    return result;
  }

  async updateUser(id: string, data: Partial<IUser>) {
    const result = await this.db
      .collection(users)
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: data },
        { returnDocument: "after" },
      );
    return result?.value;
  }

  async deleteUser(id: string) {
    const result = await this.db
      .collection(users)
      .deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }
}

export const userService = new UserService(db);
