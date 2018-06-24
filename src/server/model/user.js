/**
 * Schema for the User object in MongoDB
 * @author Andrew Jarombek
 * @since 6/2/2018
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    subscribe_date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    verify_cd: {
        type: String,
        required: true
    },
    unsub_cd: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

UserSchema.index({subscribe_date: 1});
UserSchema.index({first: 1, last: 1});

module.exports = mongoose.model('User', UserSchema, 'user');