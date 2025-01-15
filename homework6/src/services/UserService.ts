import { IUser } from "../interfaces/userInterface";
import { User } from "../entity/user/User";
import { Repository } from "typeorm";
import { appDataSource } from "./appDataSource";

class UserService {
  private repository: Repository<User>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }

  async createUser(data: IUser) {
    const user = this.repository.create(data);
    return this.repository.save(user);
  }

  async getAllUsers() {
    return this.repository.find();
  }

  async getUserById(id: number) {
    return this.repository.findOne({ where: { user_id: id } });
  }

  async updateUser(id: number, data: IUser) {
    const user = await this.repository.findOne({ where: { user_id: id } });

    if (!user) {
      throw new Error("User not found");
    }

    Object.assign(user, data);
    return this.repository.save(user);
  }

  async deleteUser(id: number) {
    return this.repository.delete({ user_id: id });
  }
}

export const userService = new UserService();
