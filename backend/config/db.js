/*import mongoose from "mongoose";

const connectDB = async ()=>{

  try{

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

  }catch(error){

    console.log(error);

    process.exit(1);

  }

};

export default connectDB;*/

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;