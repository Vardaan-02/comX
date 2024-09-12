const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
    }],
    files: [{
        type: String, 
    }],
    status:{
        type: String,
        default: "pending",
    },
    category:{
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,  // saves the date of creation of post
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

postSchema.pre('save', function(next) {
    this.updatedAt = Date.now();    // resets the updated date
    next();
});

// simple posts schema to make posts
const Post = mongoose.model('Post', postSchema);

module.exports = {Post};
