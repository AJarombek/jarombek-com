import mongoose from 'mongoose';

/**
 * Schema for the Post Content object in MongoDB
 * @author Andrew Jarombek
 * @since 8/15/2018
 */

const Schema = mongoose.Schema;

const PostContentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: Array,
        required: true
    },
    contentString: {
        type: String,
        required: true
    }
});

PostContentSchema.index({name: 1});

PostContentSchema.index(
    {
        'contentString': 'text'
    },
    {
        name: "post-content-text-index",
        default_language: 'none',
        weights: {
            'contentString': 5
        }
    }
);

module.exports = mongoose.model('PostContent', PostContentSchema, 'posts_content');