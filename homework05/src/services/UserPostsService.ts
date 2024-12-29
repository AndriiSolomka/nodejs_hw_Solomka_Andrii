import { Db, ObjectId, WithId } from "mongodb";

import collections from "../dbCollectionsNames/dbCollectionsName";
import { Post } from "../interfaces/postInterface";

const { posts } = collections;

class UserPostsService {
  async getUserPosts(user_id: string) {}

  async updateUserPosts(user_id: string, data: Partial<Post>) {}

  async deleteUserPost(user_id: string) {}
}

export const userPostsService = new UserPostsService();
