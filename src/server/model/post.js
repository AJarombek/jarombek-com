/**
 * Schema for the Post object in MongoDB
 * @author Andrew Jarombek
 * @since 4/19/2018
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    picture: String,
    color: String
});

const SourceSchema = new Schema({
    startName: String,
    endName: String,
    linkName: String,
    link: String
});

const PostSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['discovery', 'blog']
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    tags: [{
        type: TagSchema
    }],
    content: {
        type: Array,
        required: true
    },
    preview: {
        type: Array,
        required: true
    },
    sources: [{
        type: SourceSchema
    }],
    views: {
        type: Number,
        default: 0
    }
});

PostSchema.index({date: 1});

module.exports = mongoose.model('Post', PostSchema, 'posts');