import { Repository } from "typeorm";

import { appDataSource } from "./appDataSource";
import { IPost } from "../interfaces/postInterface";
import { Post } from "../entity/post/Post";
import { User } from "../entity/user/User";

class PostService {
  private repository: Repository<Post>;

  constructor() {
    this.repository = appDataSource.getRepository(Post);
  }

  async createPost(data: IPost) {
    const post = this.repository.create(data);
    return this.repository.save(post);
  }

  async getAllPosts() {
    return this.repository.find({
      relations: ["user"],
    });
  }

  async getOnePost(id: number) {
    return this.repository.findOne({
      where: { post_id: id },
      relations: ["user"],
    });
  }

  async updatePost(id: number, data: IPost) {
    const post = await this.repository.findOne({
      where: { post_id: id },
      relations: ["user"],
    });
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }

    Object.assign(post, data);
    return this.repository.save(post);
  }

  async deletePost(id: number) {
    return this.repository.delete({ post_id: id });
  }
}

export const postService = new PostService();
