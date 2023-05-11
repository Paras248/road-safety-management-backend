const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    long: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = new mongoose.model('Report', reportSchema);
