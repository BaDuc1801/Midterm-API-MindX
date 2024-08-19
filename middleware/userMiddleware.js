import userModel from "../model/user.schema.js";

const userMiddleware = {
    checkValidUpdate: async (req, res, next) => {
        let {id ,userId} = req.params;
        let user = await userModel.findById(id);
        if(user && user.userId == userId) {
            next();
        }else{
            res.status(200).send({
                massage: "User này không có quyền sửa thông tin!!"
            })
        }
    }
}

export default userMiddleware;