import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema({
    uname: String,
    answers: {
        baselineTrainingAnswers: { type: String, default: null },
        TouchTrainingAnswers: { type: String, default: null },
        animationTrainingAnswers: { type: String, default: null },
        touchCategoryAnswers: { type: String, default: null },
        animationCategoryAnswers: { type: String, default: null },
        baselineCategoryAnswers: { type: String, default: null },
      },
});

mongoose.model("UserInfo",userDetailsSchema);