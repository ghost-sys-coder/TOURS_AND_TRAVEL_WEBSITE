const mongoose = require("mongoose");



const CommentSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, "Please, leave a review"]
    },
    title: {
        type: String,
        required: [true, "Please, provide a title"]
    },
    date: {
        type: String,
        required: [true, "Please, this field cannot be empty"]
    },
    image: {
        type: String,
        required: true
    },
    userInfo: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
}, {
    timestamps: true
});

const Comment = new mongoose.model("Comment", CommentSchema);

module.exports = Comment;