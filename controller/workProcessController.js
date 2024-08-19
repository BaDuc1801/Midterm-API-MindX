import workProcessModel from "../model/workProcess.schema.js";

const workProcessController = {
    getListWorkProcess: async (req, res) => {
        const work = await workProcessModel.find();
        res.status(200).send(work)
    },
    addWorkProcess: async (req, res) => {
        let work = req.body;
        let result = await workProcessModel.create(work);
        res.status(200).send(result);
    },
    deleteWorkProcess: async (req, res) => {
        let workProcessId = req.params.id;
        let result = await workProcessModel.findByIdAndDelete(workProcessId);
        res.status(200).send(result);
    },
    updateWorkProcess: async (req, res) => {
        let newWorkProcess = req.body;
        let workProcessId = req.params.id;
        let result = await workProcessModel.findByIdAndUpdate(workProcessId, newWorkProcess);
        res.status(200).send(result)
    },
}

export default workProcessController;