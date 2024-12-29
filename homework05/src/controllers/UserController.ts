"use strict";
import { Request, Response } from "express";
import { userService } from "../services/UserService";
import logger from "../utils/loger";

const { error } = logger("UserController");

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, age } = req.body;
      const user = await userService.createUser({ name, email, age });
      res.status(200).json(user);
    } catch (err) {
      error("Create User Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers(req.query);
      res.json(users);
    } catch (err) {
      error("Create AllUsers Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async getOneUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await userService.getOneUser(id);
      res.json(user);
    } catch (err) {
      error("Create OneUser Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email, age } = req.body;

      const user = await userService.updateUser(id, { name, email, age });
      res.json(user);
    } catch (err) {
      error("Update User Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const message = await userService.deleteUser(id);
      res.json(message);
    } catch (err) {
      error("Delete User Error", err.message);
      res.status(500).json({ error: err.message });
    }
  }
}

export default new UserController();
