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
    },
    violenceCW: {
        type: Boolean,
        default: false
    },
    homophobiaCW: {
        type: Boolean,
        default: false
    },
    racismCW: {
        type: Boolean,
        default: false
    },
    transphobiaCW: {
        type: Boolean,
        default: false
    }
})

//create model for posts
const Post = mongoose.model('post', PostSchema);

module.exports = Post;