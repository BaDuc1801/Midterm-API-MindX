import userModel from "../model/user.schema.js";
import bcrypt from 'bcrypt';

const userController = {
    getListUser: async (req, res) => {
        const user = await userModel.find();
        res.status(200).send(user)
    },
    addUser: async (req, res) => {
        let user = req.body;
        let result = await userModel.create(user);
        res.status(200).send(result);
    }, 
    deleteUser: async (req, res) => {
        let userId = req.params.id;
        let result = await userModel.findByIdAndDelete(userId);
        res.status(200).send(result);
    },
    updateUser: async (req, res) => {
        let newUser = req.body;
        let userId = req.params.id;
        let result = await userModel.findByIdAndUpdate(userId, newUser);
        res.status(200).send(result)
    },
    register: async (req, res) => {
        let data = req.body;
        let salt = bcrypt.genSaltSync();
        let hashPassword = bcrypt.hashSync(data.password, salt);
        let result = await userModel.create({
            ...data,
            password: hashPassword
        })
        res.status(200).send(result)
    },
    login: async (req, res) => {
        let { userName, password } = req.body;
        let crrUser = await userModel.findOne({ userName });
        if (!crrUser) {
            res.status(404).send('Nhập sai username');
        }
        else {
            let isCorrectPassword = bcrypt.compareSync(password, crrUser.password);
            if (!isCorrectPassword) {
                res.status(401).send({
                    message: "Nhập sai password"
                });
            } else {
                res.status(200).send({
                    message: 'Login thành công!',
                    data: crrUser
                })
            }
        }
    },
    logout: async (req, res) => {
        res.status(200).send({
            message: "Đã Logout!!!"
        })
    }
}

export default userController;