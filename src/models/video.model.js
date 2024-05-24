import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String,  //cloudinary url
            required: true
        },
        thumbnail:{
            type: String,  //cloudinary url
            required: true
        },
        title:{
            type: String,  
            required: true
        },
        description:{
            type: String,  
            required: true
        },
        duration:{
            type: Number,  // we will get this from cloudinary
            required: true
        },
        views:{
            type: Number, 
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        videoOwner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timestamps: true
    }
)

export const Video = mongoose.model("Video", videoSchema)