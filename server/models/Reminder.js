const { Schema, model } = require('mongoose');
const { dateFormat } = require('../utils/helpers');

const reminderSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    time_interval:{
        type: Number,
        default: 0,
    },
    complete_count: {
        type: Number,
        default: 0,
    },
    skip_count: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    activity: {
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }
});

const Reminder = model('Reminder', reminderSchema);

module.exports = Reminder;