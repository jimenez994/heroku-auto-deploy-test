const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'Cannot be empty'],
        minlength: [3, "Comment has to be at least three characters long"]
    },
    _post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    }
}, { timestamps: true })

const Comment = mongoose.model("Comment", CommentSchema);