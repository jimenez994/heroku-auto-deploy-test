const mongoose = require('mongoose');
const Post = mongoose.model('Post');

module.exports = {
    findById: (req, res) => {
        Post.findById(req.params.id)
            .then(post => res.json(post))
            .catch(err => res.status(404).json({error: 'Post not found'}))
    },
    updateById: (req, res) => {
        Post.findOneAndUpdate({_id : req.params.id}, req.body)
            .then(post => res.json({result: 'update success'}))
            .catch(err => res.status(401).json(err))
    },
    create: (req, res) => {
        Post.create(req.body)
            .then(post => res.json(post))
            .catch(err => res.status(405).json(err))
    },
    all: (req, res) => {
        Post.find({})
            .then(posts => res.json(posts))
            .catch(err => res.status(401).json({error: "Posts not found"}))
    },
    delete: (req, res) => {
        Post.findOneAndDelete({ _id: req.params.id})
            .then(post => res.json({post: 'deleted'}))
            .catch(err => res.status(400).json(err))
    }

}