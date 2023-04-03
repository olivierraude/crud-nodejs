const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose
      .set('strictQuery', false)
      .connect(process.env.MONGO_URI) 
      .then(()=> console.log("Mongo connecté"));
  } catch(err) { 
    console.log(err);
    process.exit();
  }
}; 

module.exports = connectDB;