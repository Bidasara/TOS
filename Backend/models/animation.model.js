import mongoose from "mongoose";

const animationSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
        trim: true 
    },
})

export const Animation = mongoose.model('Animation', animationSchema);
