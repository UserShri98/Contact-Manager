import mongoose from "mongoose";


const schema = new mongoose.Schema({
    title:{
    type:String,
    required:true,
    },
    description:{
     required:true,
     type:String,
    },
    isCompleted:{
     type:Boolean,
     default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    }
})

 export const Task=mongoose.model("Task" , schema)