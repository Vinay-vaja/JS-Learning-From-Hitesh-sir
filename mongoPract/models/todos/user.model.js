import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        

    }
},{timestamps:true})
//by using timestmps automatically mongoose include your created at and update at in this 

export const User = mongoose.model("User",UserSchema);

//data base ma users eem store thase because plural and small letter ma convert kari de