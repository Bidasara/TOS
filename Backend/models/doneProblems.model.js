import mongoose, { SchemaTypes } from "mongoose";
import { Schema } from "mongoose";

const doneProblemsSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    solvedProblems: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Problem'
        }],
        default: []
    },
    revisedProblems: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Problem'
        }],
        default: []
    }
})

export const DoneProblem = mongoose.model('DoneProblem',doneProblemsSchema)