import express from "express";
import workProcessController from "../controller/workProcessController.js";
import workProcessMiddleware from "../middleware/workProcessMiddleware.js";

const workProcessRouter = express.Router();

workProcessRouter.get('/', workProcessController.getListWorkProcess);
workProcessRouter.post('/', workProcessController.addWorkProcess);
workProcessRouter.put('/update/:id', workProcessController.updateWorkProcess);
workProcessRouter.delete('/delete/:id', workProcessController.deleteWorkProcess);

// check userId
workProcessRouter.put('/update/:id/userId/:userId', workProcessMiddleware.checkValidUpdate ,workProcessController.updateWorkProcess);

export default workProcessRouter;