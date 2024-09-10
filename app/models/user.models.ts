import { verify } from 'crypto';
import mongoose, {Schema} from 'mongoose';

export interface User extends Document{
    fullName: string;
    password: string;
    email:string;
    profilePic:string;
    phone:number;
    isUsingCMS:boolean;
    isAdmin:boolean;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
}


const UserSchema = new Schema({
    fullName:{
        type:String,
        required:true,
        trim:true

    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true
    },
    profilePic:{
        type:String,
        required:false,
    },
    phone:{
        type:Number,
        required:true,

    },
    isUsingCMS:{
        type:Boolean,
        default: false
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    verifyCode:{
        type:String,
        required:true
    },
    verifyCodeExpiry:{
        type:Date,
        required:true
    },
    isVerified:{
        type:Boolean,
        default: false
    }


})

export const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)  
