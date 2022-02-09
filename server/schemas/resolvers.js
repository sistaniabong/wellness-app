const { User, Activity, Reminder, Todo } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('activities');
        },

        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('activities').populate({
                path: 'activities',
                populate: 'reminders',
            }).populate({
                path: 'activities',
                populate: 'todos',
            });
        },

        activities: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Activity.find(params).sort({ createdAt: -1 });
        },
        activity: async (parent, { activityId }) => {
            return Activity.findOne({ _id: activityId });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('activities');
            }
            throw new AuthenticationError('You need to be logged in!');
        },

    },
    Mutation: {
        // add the signup and login mutations
        signup: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (user) {
                throw new AuthenticationError('No user with this username found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        }
    }


};

module.exports = resolvers;
