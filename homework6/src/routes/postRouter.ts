import { Router } from "express";
import PostController from "../controllers/PostController";
import { validate } from "../middleware/userValidation";
import {
  createUsersPostSchema,
  updatePostSchema,
} from "../validation/posts/postsValidation";

const postRouter = Router();

postRouter.post("/", validate(createUsersPostSchema), PostController.create);
postRouter.get("/", PostController.getAllPosts);
postRouter.get("/:id", PostController.getOnePost);
postRouter.put("/:id", validate(updatePostSchema), PostController.updatePost);
postRouter.delete("/:id", PostController.deletePost);

export default postRouter;
