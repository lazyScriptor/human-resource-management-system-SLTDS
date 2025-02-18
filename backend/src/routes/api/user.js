import { Router } from "express";
import { userController } from "../../controllers/userController.js";

const userRouter = Router();
userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.createUser);
userRouter.get(
  "/:id",
  userController.validateSession,
  userController.getUserById
);
userRouter.post("/bulk", userController.bulkCreateUsers);
userRouter.patch("/age", userController.updateUsersByAge);
userRouter.delete("/:id", userController.deleteUser);
userRouter.get("/name/:username", userController.getUserByUsername);
userRouter.post("/authenticate", userController.authorizeCheck);
userRouter.get("/validate", userController.validateSession);
// Example of protecting a route

export default userRouter;
