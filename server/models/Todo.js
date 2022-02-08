const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/helpers');

const todoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: false,
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

const Todo = model('Todo', todoSchema);

module.exports = Todo;