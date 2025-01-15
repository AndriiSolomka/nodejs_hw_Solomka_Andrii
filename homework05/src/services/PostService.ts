import { IPost } from "../interfaces/postInterface";
import { Post } from "../models/Post";

class PostService {
  async createPost(data: IPost) {
    const post = new Post(data);
    await post.save();
    return post.id;
  }

  async getAllPosts(filters: Record<string, any> = {}) {
    return await Post.find(filters);
  }

  async getOnePost(id: string) {
    return await Post.findById(id);
  }

  async updatePost(id: string, data: Partial<IPost>) {
    return Post.findByIdAndUpdate(id, { $set: data });
  }

  async deletePost(id: string) {
    return await Post.findByIdAndDelete(id);
  }
}

export const postService = new PostService();
