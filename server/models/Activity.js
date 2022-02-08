const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
        },
        comments: [
            {
                commentText: {
                    type: String,
                    required: true,
                    minlength: 1,
                    maxlength: 280,
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (timestamp) => dateFormat(timestamp),
                },
            },
        ],
        reminders: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reminder'
            }
        ],
        todos: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Todo'
            }
        ]
    }
);

const Activity = model('Activity', activitySchema);

module.exports = Activity;