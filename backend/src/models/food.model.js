import mongoose,{Schema} from "mongoose";

const foodSchema = new Schema({
    username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String, //cloudinary url
        required:true
    },
    category:{
        type:String,
        required:true
    }
})
export const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)