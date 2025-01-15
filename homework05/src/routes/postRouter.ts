import { Router } from "express";
import PostController from "../controllers/PostController";

const postRouter = Router();

postRouter.post("/", PostController.create);
postRouter.get("/", PostController.getAllPosts);
postRouter.get("/:id", PostController.getOnePost);
postRouter.put("/:id", PostController.updatePost);
postRouter.delete("/:id", PostController.deletePost);

export default postRouter;
