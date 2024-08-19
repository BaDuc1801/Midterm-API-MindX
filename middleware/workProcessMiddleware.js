import workProcessModel from "../model/workProcess.schema.js";

const workProcessMiddleware = {
    checkValidUpdate: async (req, res, next) => {
        let {id ,userId} = req.params;
        let workProcess = await workProcessModel.findById(id);
        if(workProcess && workProcess.userId == userId) {
            next();
        }else{
            res.status(200).send({
                massage: "User này không có quyền sửa thông tin!!"
            })
        }
    }
}

export default workProcessMiddleware;