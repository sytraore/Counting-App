import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema({
    uname: String,
    answer0: Number,
    answer1:Number,
    answer2: Number,
    answer3: Number,
    totalScore: Number,
});

mongoose.model("UserInfo",userDetailsSchema);