import personalProjectModel from "../model/personalProject.schema.js";

const personalProjectController = {
    getListPersonalProject: async (req, res) => {
        const user = await personalProjectModel.find();
        res.status(200).send(user)
    },
    addPersonalProject: async (req, res) => {
        let user = req.body;
        let result = await personalProjectModel.create(user);
        res.status(200).send(result);
    },
    deletePersonalProject: async (req, res) => {
        let personalProjectId = req.params.id;
        let result = await personalProjectModel.findByIdAndDelete(personalProjectId);
        res.status(200).send(result);
    },
    updatePersonalProject: async (req, res) => {
        let newPersonalProject = req.body;
        let personalProjectId = req.params.id;
        let result = await personalProjectModel.findByIdAndUpdate(personalProjectId, newPersonalProject);
        res.status(200).send(result)
    },
}

export default personalProjectController;