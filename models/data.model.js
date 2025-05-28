import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    problems: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Problem'
    }]
},{timestamps: true});

export const Category = mongoose.model('Category', categorySchema);

const recomListSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    count: {type: Number, required: true},
    tags: {type: [String]},
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
},{timestamps: true});

export const RecomList = mongoose.model('RecomList', recomListSchema);

const recomDataSchema = new mongoose.Schema({
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RecomList'
    }],
},{timestamps: true});

export default mongoose.model('RecomData', recomDataSchema);