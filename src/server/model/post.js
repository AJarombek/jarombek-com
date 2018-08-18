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
    preview: {
        type: Array,
        required: true
    },
    previewString: {
        type: String,
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

PostSchema.index({name: 1});
PostSchema.index({date: 1});

PostSchema.index(
    {
        'name': 'text',
        'title': 'text',
        'type': 'text',
        'date': 'text',
        'tags.name': 'text',
        'previewString': 'text',
        'sources.startName': 'text',
        'sources.endName': 'text',
        'sources.linkName': 'text',
        'sources.link': 'text'
    },
    {
        weights: {
            'name': 100,
            'title': 100,
            'type': 50,
            'date': 5,
            'tags.name': 25,
            'previewString': 5,
            'sources.startName': 2,
            'sources.endName': 2,
            'sources.linkName': 2,
            'sources.link': 2
        }
    }
);

module.exports = mongoose.model('Post', PostSchema, 'posts');