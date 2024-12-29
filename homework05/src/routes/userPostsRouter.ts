import { Router } from "express";
import UserPostController from "../../controllers/UserPostController";

const userPostsRouter = Router();

userPostsRouter.post("/:user_id/posts", UserPostController.createPost);
userPostsRouter.get("/:user_id/posts", UserPostController.getAllPosts);
userPostsRouter.put("/:user_id/posts", UserPostController.updatePost);
userPostsRouter.delete("/:user_id/posts", UserPostController.deletePost);
export default userPostsRouter;
