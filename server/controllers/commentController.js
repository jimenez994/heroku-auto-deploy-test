const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const Post = mongoose.model('Post')

module.exports = {
    create: (req, res) => {
        Comment.create(req.body)
            .then(comment => {
                Post.findById(comment._post)
                    .then(post => {
                        post._comments.push(comment)
                        post.save(err=> {
                            if(err){res.status(405).json('unable to save comment')}
                            res.json(comment)
                        })
                    })
                    .catch(err => res.status(403).json({error: "fail to find user"}))
            })
            .catch(err => res.status(405).json(err)) 
    },
    all: (req, res) => {
        Comment.find({})
            .then(comments => res.json(comments))
            .catch(err => res.status(405).json(err))
    }
} 