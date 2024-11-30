import mongoose from "mongoose"
const schema=mongoose.Schema
const userSchema=new schema(
    {
        FirstName:{
            type:String,
            required:true
        },
        LastName:{
            type:String,
            required:true
        },
        Email:{
            type:String,
            required:true
        },
        Password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            enum:["Admin","User"],
            default:"User"
        },
        otp:{
            type:Number
        },
        otpExpiry:{
            type:Date
        },
        verified:{
            type:Boolean,
            required:true,
            default:false
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        updatedAt:{
            type:Date,
            default:Date.now
        }
    }
);
const UserModel=mongoose.model("User",userSchema);
export default UserModel;