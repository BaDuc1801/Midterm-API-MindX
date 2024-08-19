import mongoose from "mongoose";

const personalProjectSchema = new mongoose.Schema({
    userId: String,
    nameProject: String,
    content: String,
    role: String,
    start: String,
    end: String
})

const personalProjectModel = mongoose.model('personal-project', personalProjectSchema);

export default personalProjectModel;