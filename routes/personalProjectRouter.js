import express from "express";
import personalProjectController from "../controller/personalProjectController.js";
import personalProjectMiddleware from "../middleware/personalProjectMiddleware.js";

const personalProjectRouter = express.Router();

personalProjectRouter.get('/', personalProjectController.getListPersonalProject);
personalProjectRouter.post('/', personalProjectController.addPersonalProject);
personalProjectRouter.put('/update/:id', personalProjectController.updatePersonalProject);
personalProjectRouter.delete('/delete/:id', personalProjectController.deletePersonalProject);

// check userId
personalProjectRouter.put('/update/:id/userId/:userId', personalProjectMiddleware.checkValidUpdate ,personalProjectController.updatePersonalProject);

export default personalProjectRouter;