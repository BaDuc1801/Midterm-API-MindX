import express from "express";
import userController from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get('/', userController.getListUser);
userRouter.post('/', userController.addUser);
userRouter.post('/register', userController.register);
userRouter.put('/update/:id', userController.updateUser);
userRouter.delete('/delete/:id', userController.deleteUser);
userRouter.post('/login', userController.login);
userRouter.post('/logout', userController.logout);

export default userRouter;