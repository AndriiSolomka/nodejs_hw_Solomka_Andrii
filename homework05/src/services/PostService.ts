import { Db, ObjectId, WithId } from "mongodb";
import collections from "../dbCollectionsNames/dbCollectionsName";
import { Post } from "../interfaces/postInterface";

const { posts } = collections;

class PostService {
  async createPost(data: Post) {}

  async getAllPosts(filters: Record<string, any> = {}) {}

  async getOnePost(id: string) {}

  async updatePost(id: string, data: Partial<Post>) {}

  async deletePost(id: string) {}
}

export const postService = new PostService();
