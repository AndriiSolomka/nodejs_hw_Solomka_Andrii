"use strict";
import { Request, Response } from "express";
import { postService } from "../services/PostService";
import { ObjectId } from "mongodb";
import logger from "../utils/loger";

const { error } = logger("PostController");

class PostController {
  async create(req: Request, res: Response) {
    try {
      const { authorId, title, content, status, createdAt, updatedAt } =
        req.body;

      const post = await postService.createPost({
        authorId: new ObjectId(authorId),
        title,
        content,
        status,
        createdAt,
        updatedAt,
      });
      res.status(200).json(post);
    } catch (err) {
      error("Create Post Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await postService.getAllPosts(req.query);
      res.json(posts);
    } catch (err) {
      error("Get AllPosts Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async getOnePost(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await postService.getOnePost(id);
      res.json(user);
    } catch (err) {
      error("Get OnePost Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async updatePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { authorId, title, content, status, createdAt, updatedAt } =
        req.body;
      const user = await postService.updatePost(id, {
        authorId,
        title,
        content,
        status,
        createdAt,
        updatedAt,
      });
      res.json(user);
    } catch (err) {
      error("Update Post Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const message = await postService.deletePost(id);
      res.json(message);
    } catch (err) {
      error("Delete Post Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }
}

export default new PostController();
