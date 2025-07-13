import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    animation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animation',
        required: true,
    }
})

export const Purchase = mongoose.model('Purchase', purchaseSchema);