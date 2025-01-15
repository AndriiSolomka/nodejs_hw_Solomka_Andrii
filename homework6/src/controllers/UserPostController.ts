"use strict";
import { Request, Response } from "express";

import { postService } from "../services/PostService";
import { userPostsService } from "../services/UserPostsService";
import logger from "../utils/loger";
import { userService } from "../services/UserService";

const { error } = logger("UserPostsController");

class UserPostController {
  async createPost(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const { title, content, status } = req.body;
      const user = await userService.getUserById(+user_id);
      if (!user) {
        throw new Error("User not found");
      }
      const postData = {
        user,
        title,
        content,
        status,
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
      const post = await userPostsService.getUserPosts(+user_id);
      res.json(post);
    } catch (err) {
      error("Get AllUserPosts Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async updatePosts(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const { title, content, status } = req.body;

      const user = await userService.getUserById(+user_id);
      if (!user) {
        throw new Error("User not found");
      }

      const post = await postService.updatePost(+user_id, {
        user,
        title,
        content,
        status,
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
      const post = await userPostsService.deleteUserPosts(+user_id);
      res.json(post);
    } catch (err) {
      error("Delete UserPosts Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }
}

export default new UserPostController();
