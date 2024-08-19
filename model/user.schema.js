import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    dateOfBirth: String,
    placeOfBirth: String,
    nationality: String,
    eduProcess: String,
    Hobby: String,
    personalGoal: String,
    userName: String,
    password: String
})

const userModel = mongoose.model('users', userSchema);

export default userModel;