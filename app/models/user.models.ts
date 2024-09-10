import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
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

    },
    isAdmin:{
        type:Boolean,
    }


})

export const User = mongoose.model("User", userSchema);
