import mongoose from "mongoose";
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const mongoUrl = `mongodb+srv://${uname}:${pw}@cluster0.oypxwnq.mongodb.net/?retryWrites=true&w=majority`;
const mongoUrl = "mongodb://127.0.0.1:27017/counting";

async function connectToDb(cb){
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
      })
        .then(() => {
          console.log('Connected to MongoDB');
        })
        .catch((err) => {
          console.error('Error connecting to MongoDB:', err);
        });
}


export{
    connectToDb,
};