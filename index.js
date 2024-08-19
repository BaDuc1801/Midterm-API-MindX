import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import personalSkillRouter from "./routes/personalSkillRouter.js";
import personalProjectRouter from "./routes/personalProjectRouter.js";
import workProcessRouter from "./routes/workProcessRouter.js";

const MONGODB_URI = 'mongodb+srv://minhduc180104:minhduc180104@learnmongo.zli6q.mongodb.net/web80?retryWrites=true&w=majority';
await mongoose.connect(MONGODB_URI);

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/personal-skill', personalSkillRouter);
app.use('/personal-project', personalProjectRouter);
app.use('/work-process', workProcessRouter)

app.listen(8080, () => {
    console.log('Server is running!')
})

// người 1:
// password: 123
// người 2:
// password: abc
// người 3:
// password: a


