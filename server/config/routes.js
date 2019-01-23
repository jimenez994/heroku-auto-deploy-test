
const path = require("path");
const Post = require("../controllers/postController");
const Comment = require("../controllers/commentController");

module.exports = (app) => {

    // post
    app.post("/api/post/create", Post.create);
    app.get("/api/post/all", Post.all)
    app.delete("/api/post/delete/:id", Post.delete);
    app.get("/api/post/:id", Post.findById);
    app.put('/api/post/update/:id', Post.updateById)

    // comment
    app.post("/api/comment/create", Comment.create);
    app.get("/api/comment/all", Comment.all);

    app.all("*", (req, res,next) => {
        res.sendFile(path.resolve("./client/build/index.html"));
    })
    
}