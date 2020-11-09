const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Post = require('../models/post');

router.get('/posts', (req, res, next) => {
    //returns data
    Post.find({}, 'text')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/create', (req, res, next) => {
    if(req.body.text){
        Post.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }
    else{
        res.json({
            error: "Posts must have text"
        })
    }
});

module.exports = router;