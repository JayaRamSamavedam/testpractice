import mongoose from "mongoose";
import dontev from "dotenv"


dontev.config();
mongoose.connect(process.env.db_url).then(()=>{
    console.log("databse");
})
.catch((error)=>{
    console.log(error.message);
})