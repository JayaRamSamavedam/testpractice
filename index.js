import express from 'express'
const app = express();

import "./db/connection.js";

app.use(express.json());
import studentrouter from "./routers/studentrouter.js";
app.use(studentrouter);
app.get("/",(req,res)=>{
    res.send("hi from backend");
})


app.listen(2828,()=>{
    console.log("app started");
})