import mongoose, { Schema } from "mongoose"

const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User"
    }, //in refrence use User which is finally use in export right side in user schema
    todos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]


},{timestamps:true})

export const Todo = mongoose.model('Todo',todoSchema);