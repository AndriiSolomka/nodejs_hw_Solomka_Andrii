import { IPost } from "../interfaces/postInterface";
import { Post } from "../entity/post/Post";
import { Repository } from "typeorm";
import { appDataSource } from "./appDataSource";

class UserPostsService {
  private repository: Repository<Post>;

  constructor() {
    this.repository = appDataSource.getRepository(Post);
  }

  async getUserPosts(user_id: number) {
    return this.repository.find({
      where: { user: { user_id } },
    });
  }

  async deleteUserPosts(id: number) {
    return this.repository.delete({ user: { user_id: id } });
  }
}

export const userPostsService = new UserPostsService();
