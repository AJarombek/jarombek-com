import mongoose from 'mongoose';

/**
 * Schema for the Stats object in MongoDB
 * @author Andrew Jarombek
 * @since 9/16/2019
 */

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    first_year: {
        type: Number,
        required: true
    },
    lines: {
        type: Array,
        required: true
    },
    rank: {
        type: Array,
        required: true
    }
});

StatsSchema.index({name: 1});

export default mongoose.model('Stats', StatsSchema, 'stats');