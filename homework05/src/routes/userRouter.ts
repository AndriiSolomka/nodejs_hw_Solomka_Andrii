import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.post("/", UserController.create);
userRouter.get("/", UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUser);
userRouter.put("/:id", UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);

export default userRouter;
