import personalSkillModel from "../model/personalSkill.schema.js";

const personalSkillMiddleware = {
    checkValidUpdate: async (req, res, next) => {
        let {id ,userId} = req.params;
        let person = await personalSkillModel.findById(id);
        if(person && person.userId == userId) {
            next();
        }else{
            res.status(200).send({
                massage: "User này không có quyền sửa thông tin!!"
            })
        }
    }
}

export default personalSkillMiddleware;