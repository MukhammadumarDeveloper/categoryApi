const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true
    },

    password: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true
    }
},{ versionKey: false });

module.exports = mongoose.model('users', UserSchema);