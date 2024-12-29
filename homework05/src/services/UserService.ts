import { User } from "../models/User";
import { IUser } from "../interfaces/userInterface";

class UserService {
  async createUser(data: IUser) {
    const user = new User(data);
    return await user.save();
  }

  async getAllUsers(filters: Record<string, any> = {}) {
    return await User.find(filters);
  }

  async getOneUser(id: string) {
    return await User.findById(id);
  }

  async updateUser(id: string, data: Partial<IUser>) {}

  async deleteUser(id: string) {
    return User.deleteOne({ _id: id });
  }
}

export const userService = new UserService();
