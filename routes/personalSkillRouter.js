import express from "express";
import personalSkillController from "../controller/personallSkillController.js";
import personalSkillMiddleware from "../middleware/personalSkillMiddleware.js";

const personalSkillRouter = express.Router();

personalSkillRouter.get('/', personalSkillController.getListPersonalSkill);
personalSkillRouter.post('/', personalSkillController.addPersonalSkill);
personalSkillRouter.put('/update/:id', personalSkillController.updatePersonalSkill);
personalSkillRouter.delete('/delete/:id', personalSkillController.deletePersonalSkill);

// check userId
personalSkillRouter.put('/update/:id/userId/:userId', personalSkillMiddleware.checkValidUpdate ,personalSkillController.updatePersonalSkill);

export default personalSkillRouter;