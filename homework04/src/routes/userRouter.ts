import { Router, Request, Response } from "express";
import { userService } from "../services/UserService";

const userRouter = Router();

userRouter.post("/users", async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;
    const user = await userService.createUser({ name, email, age });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRouter.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers(req.query);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRouter.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userService.getOneUser(id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRouter.put("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const user = await userService.updateUser(id, { name, email, age });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
userRouter.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const message = await userService.deleteUser(id);
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default userRouter;
