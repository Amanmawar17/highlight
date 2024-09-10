import mongoose, {Schema} from 'mongoose';

const videoSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    featuredImg:{
        type: String,
    },
    images:[{
        type: String,
    }]

})

export const Video = mongoose.model("Video", videoSchema);