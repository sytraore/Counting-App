import mongoose from "mongoose";

const mongoUrl = "mongodb+srv://sul:apuMuN5U8576wpkI@cluster0.oypxwnq.mongodb.net/?retryWrites=true&w=majority";

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