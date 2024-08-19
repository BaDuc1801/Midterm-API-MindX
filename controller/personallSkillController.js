import personalSkillModel from "../model/personalSkill.schema.js";

const personalSkillController = {
    getListPersonalSkill: async (req, res) => {
        const user = await personalSkillModel.find();
        res.status(200).send(user)
    },
    addPersonalSkill: async (req, res) => {
        let user = req.body;
        let result = await personalSkillModel.create(user);
        res.status(200).send(result);
    },
    deletePersonalSkill: async (req, res) => {
        let personalSkillId = req.params.id;
        let result = await personalSkillModel.findByIdAndDelete(personalSkillId);
        res.status(200).send(result);
    },
    updatePersonalSkill: async (req, res) => {
        let newPersonalSkill = req.body;
        let personalSkillId = req.params.id;
        let result = await personalSkillModel.findByIdAndUpdate(personalSkillId, newPersonalSkill);
        res.status(200).send(result)
    }
}

export default personalSkillController;