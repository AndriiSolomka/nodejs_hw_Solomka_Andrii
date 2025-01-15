"use strict";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { postService } from "../services/PostService";
import { userPostsService } from "../services/UserPostsService";
import logger from "../utils/loger";

const { error } = logger("UserPostsController");

class UserPostController {
  async createPost(req: Request, res: Response) {
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
      error("Create UserPosts Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async getAllPosts(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const post = await userPostsService.getUserPosts(user_id);
      res.json(post);
    } catch (err) {
      error("Get AllUserPosts Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async updatePosts(req: Request, res: Response) {
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
      error("Update UserPosts Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async deletePosts(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const post = await userPostsService.deleteUserPosts(user_id);
      res.json(post);
    } catch (err) {
      error("Delete UserPosts Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }
}

export default new UserPostController();
