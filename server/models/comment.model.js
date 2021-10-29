const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [false, "Name must be 2 characters long"],
    },
    email: {
        type: String,
        required: [false, "Please enter a valid email format"],
    },
    text: {
        type: String,
        required: [true, "Msg. is required"],
        minlength: [10, "Minimun length should be at least 10 characters"]
    },
    
}, {timestamps: true})

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;