import { Router } from "express";
import UserController from "../controllers/UserController";
import { validate } from "../middleware/userValidation";
import {
  createUserSchema,
  updateUserSchema,
} from "../validation/users/usersValidation";

const userRouter = Router();

userRouter.post("/", validate(createUserSchema), UserController.create);
userRouter.get("/", UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUser);
userRouter.put("/:id", validate(updateUserSchema), UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);

export default userRouter;
