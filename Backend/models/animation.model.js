import mongoose from "mongoose";

const animationSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    pack: {
        idle: {
            type: String,
            required: true,
            trim: true
        },
        attack: {
            type: String,
            required: true,
            trim: true
        },
        break: {
            type: String,
            required: true,
            trim: true
        }
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    }
})

export const Animation = mongoose.model('Animation', animationSchema);
