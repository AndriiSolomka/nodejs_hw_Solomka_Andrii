import { IPost } from "../interfaces/postInterface";
import { Post } from "../models/Post";
import { ObjectId } from "mongodb";

class UserPostsService {
  async getUserPosts(user_id: string) {
    return Post.find({ authorId: this.convertToObjectId(user_id) });
  }

  async updateUserPosts(user_id: string, data: Partial<IPost>) {
    return Post.updateMany(
      { authorId: this.convertToObjectId(user_id) },
      { $set: data },
    );
  }

  async deleteUserPosts(user_id: string) {
    return Post.deleteMany({ authorId: this.convertToObjectId(user_id) });
  }

  private convertToObjectId(user_id: string): ObjectId {
    return new ObjectId(user_id);
  }
}

export const userPostsService = new UserPostsService();
