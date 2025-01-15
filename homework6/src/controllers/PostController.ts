"use strict";
import { Request, Response } from "express";
import { postService } from "../services/PostService";
import logger from "../utils/loger";
import { userService } from "../services/UserService";

const { error } = logger("PostController");

class PostController {
  async create(req: Request, res: Response) {
    try {
      const { title, content, status, user_id } = req.body;
      const user = await userService.getUserById(+user_id);
      if (!user) {
        throw new Error("Not found user");
      }
      const post = await postService.createPost({
        user,
        title,
        content,
        status,
      });
      console.log(post);
      res.status(200).json(post);
    } catch (err) {
      error("Create Post Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await postService.getAllPosts();
      res.json(posts);
    } catch (err) {
      error("Get AllPosts Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async getOnePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const post = await postService.getOnePost(+id);
      if (!post) {
        throw new Error("Not found post");
      }

      res.json(post);
    } catch (err) {
      error("Get OnePost Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async updatePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { author_id, title, content, status, createdAt, updatedAt } =
        req.body;

      const user = await userService.getUserById(+author_id);
      if (!user) {
        throw new Error("User not found");
      }

      const post = await postService.updatePost(+id, {
        user,
        title,
        content,
        status,
      });
      res.json(post);
    } catch (err) {
      error("Update Post Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const message = await postService.deletePost(+id);
      res.json(message);
    } catch (err) {
      error("Delete Post Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }
}

export default new PostController();
