/**
 * Schema for the Viewed object in MongoDB
 * @author Andrew Jarombek
 * @since 5/17/2018
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViewedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['post']
    },
    views: {
        type: Number,
        default: 0
    }
});

ViewedSchema.index({date: 1});

module.exports = mongoose.model('Viewed', ViewedSchema, 'viewed');