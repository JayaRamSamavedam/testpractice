import mongoose from "mongoose";

const student = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
    },
    name:{
        type:String,
        require:true
    },

},{timestamps:true});

const Student = mongoose.model('Student',student);
export default Student;