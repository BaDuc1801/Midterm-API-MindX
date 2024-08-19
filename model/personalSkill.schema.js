import mongoose from "mongoose";

const personalSkillSchema = new mongoose.Schema({
    userId: String,
    personalSkill: String
})

const personalSkillModel = mongoose.model('personal-skill', personalSkillSchema);

export default personalSkillModel;