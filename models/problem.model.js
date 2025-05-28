const problemSchema = new mongoose.Schema({
    num: {
        type: Number, 
        required: true
    },
    title: {
        type: String, 
        required: true, 
        trim: true
    },
    difficulty: {
        type: String, 
        required: true, 
        enum: ['Easy', 'Medium', 'Hard'],
    },
    link: {
        type: String,
        required: true,
    }
});

export const Problem = mongoose.model('Problem', problemSchema);