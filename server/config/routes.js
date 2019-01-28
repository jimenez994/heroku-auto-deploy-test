
const path = require("path");
const Post = require("../controllers/postController");
const Comment = require("../controllers/commentController");
const User = require("../controllers/userController");
const passport = require('passport')

module.exports = (app) => {
    // with auth routes can be assigned to become private
    const auth = passport.authenticate("jwt", {session: false});
    // post
    app.post("/api/post/create", Post.create);
    app.get("/api/post/all", Post.all)
    app.delete("/api/post/delete/:id", Post.delete);
    app.get("/api/post/:id", Post.findById);
    app.put('/api/post/update/:id', Post.updateById)

    // comment
    app.post("/api/comment/create", Comment.create);
    app.get("/api/comment/all", Comment.all);

    // user
    app.post('/api/register', User.register);
    app.get('/api/allUsers', User.all);
    app.post('/api/login', User.login);
    app.post('/api/user/delete', User.delete);

    app.all("*", (req, res,next) => {
        res.sendFile(path.resolve("./client/build/index.html"));
    })
}