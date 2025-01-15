import { Router } from "express";
import UserPostController from "../controllers/UserPostController";
import { validate } from "../middleware/userValidation";
import {
  createUsersPostSchema,
  updateUsersPostSchema,
} from "../validation/posts/postsValidation";

const userPostsRouter = Router();

userPostsRouter.post(
  "/:user_id/posts",
  validate(createUsersPostSchema),
  UserPostController.createPost,
);
userPostsRouter.get("/:user_id/posts", UserPostController.getAllPosts);
userPostsRouter.put(
  "/:user_id/posts",
  validate(updateUsersPostSchema),
  UserPostController.updatePosts,
);
userPostsRouter.delete("/:user_id/posts", UserPostController.deletePosts);
export default userPostsRouter;
