const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate")

const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        require: [true, "The post cannot be empty"],
        minlength: [3, "The post must at least have three characters"]
    },
    _comments : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        autopopulate: true
    }]
},{ timestamps: true });
PostSchema.plugin(autopopulate);
const Post = mongoose.model("Post", PostSchema);