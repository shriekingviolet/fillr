const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for posts
const PostSchema = new Schema({
    text: {
        type: String,
        required: [true, 'Text is required for a post']
    },
    date: {
        type: Date,
        required: [true],
        default: Date.now
    }
})

//create model for posts
const Post = mongoose.model('post', PostSchema);

module.exports = Post;