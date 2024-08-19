import mongoose from "mongoose";

const workProcessSchema = new mongoose.Schema({
    userId: String,
    processTime: String,
    companyName: String,
    role: String
})

const workProcessModel = mongoose.model('work-process', workProcessSchema);

export default workProcessModel;