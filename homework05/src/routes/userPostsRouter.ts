import { Router, Request, Response } from "express";
import { userPostsService } from "../services/UserPostsService";
import { postService } from "../services/PostService";
import { ObjectId } from "mongodb";

const userPostsRouter = Router();

userPostsRouter.post("/:user_id/posts", async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const { title, content, status, createdAt, updatedAt } = req.body;

    const postData = {
      authorId: new ObjectId(user_id),
      title,
      content,
      status,
      createdAt,
      updatedAt,
    };
    const post = await postService.createPost(postData);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userPostsRouter.get("/:user_id/posts", async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const post = await userPostsService.getUserPosts(user_id);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userPostsRouter.put("/:user_id/posts", async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const { title, content, status, createdAt, updatedAt } = req.body;

    const post = await userPostsService.updateUserPosts(user_id, {
      title,
      content,
      status,
      createdAt,
      updatedAt,
    });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userPostsRouter.delete(
  "/:user_id/posts",
  async (req: Request, res: Response) => {
    try {
      const { user_id } = req.params;
      const post = await userPostsService.deleteUserPost(user_id);
      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
);
export default userPostsRouter;
