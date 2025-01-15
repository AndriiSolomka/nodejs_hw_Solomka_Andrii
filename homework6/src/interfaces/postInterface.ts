import { User } from "../entity/user/User";

export interface IPost {
  user: User;
  title: string;
  content: string;
  status: string;
}
