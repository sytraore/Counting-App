import {connectToDb} from './db.js';
import express from 'express';
import './data/userDetails.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const JWT_SECRET = "wjergiurh2o$3hrorir804623]4801[1314hkjtgo24o823801";


const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
    const { name } = req.body;
  
    try {
      await User.create({
        uname: name,
        answer1: false,
        answer2:false,
        answer3: false,
        answer4: false,
        answer5: false,
        totalScore: 0,
      });
      console.log(User)
      const token = jwt.sign({name: name}, JWT_SECRET,{
        expiresIn: 86400,
      });
      res.send({ status: "ok", data: token });

    } catch (error) {
      res.send({ status: "error" });
    }
  });


  app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return err;
        }
        return res;
      });

      if (user == "TokenExpiredError: jwt expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const username = user.name;
      const data = await User.findOne({ uname: username });
    
      if (data) {
        res.send({ status: "ok", data: data });
      } else {
        res.send({ status: "error", data: "User not found" });
      }
    } catch (error) {
      console.error("Error :", error);
     }
  });


  app.post("/update-answer/:questionNumber", async (req, res) => {
    const { questionNumber } = req.params;
    const { token, newAnswer } = req.body;
    const correctAnswers = ["greenTray","purpleTray","greenTray","purpleTray"];
    let score = 0;
  
    try {
      const user = jwt.verify(token, JWT_SECRET);
      const username = user.name;

      if (newAnswer === correctAnswers[questionNumber]) {
        score = 1;
      }else{
        score = 0;
      }

      const updatedUser = await User.findOneAndUpdate(
        { uname :username },
        { [`answer${questionNumber}`]: score },
      );
  
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: "Error updating answer." });
    }
  });




const PORT = 8000;

connectToDb()
  .then(() => {
    console.log("Successfully Connected to DB");

    app.listen(PORT, () => {
      console.log("Server listening on port " + PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

