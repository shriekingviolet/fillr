const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for users
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Users must have a username']
    }
})

//create model for users
const User = mongoose.model('user', UserSchema);

module.exports = User;