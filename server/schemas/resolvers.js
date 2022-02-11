const { User, Activity, Reminder, Todo } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('activities')
                .populate({
                    path: 'activities',
                    populate: ['reminders', 'todos']
                });
        },

        // user: async (parent, { username }) => {
        //     return User.findOne({ username }).populate('activities')
        //     .populate({
        //         path: 'activities',
        //         populate: 'reminders',
        //     }).populate({
        //         path: 'activities',
        //         populate: 'todos',
        //     });
        // },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('activities')
                .populate({
                    path: 'activities',
                    populate: ['reminders', 'todos']
                })
        },

        activities: async (parent, { username }) => {
            return Activity.find({ user: username }).populate(['reminders', 'todos', 'comments']).sort({ createdAt: -1 });
        },
        activity: async (parent, { activityId }) => {
            return Activity.findOne({ _id: activityId }).populate(['reminders', 'todos','comments']);
        },
        allActivities: async () => {
            console.log('allActivities')
            console.log(Activity.find().populate(['reminders', 'todos']));
            return Activity.find().populate(['reminders', 'todos', 'comments']).sort({ createdAt: -1 });
        },

        reminder: async (parent, { activityId }) => {
            return Reminder.find({ activity: activityId }).populate(['activities']);
        },
        reminders: async () => {
            return Reminder.find().sort({ createdAt: -1 });
        },

        todo: async (parent, { activityId }) => {
            return Todo.find({ activity: activityId }).populate(['activities']);
        },
        todos: async () => {
            return Todo.find().sort({ createdAt: -1 });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('activities')
                    .populate({
                        path: 'activities',
                        populate: ['reminders', 'todos']
                    });
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
        },
        addActivity: async (parent, { user, title, duration }) => {
            const activity = await Activity.create({ user, title, duration });
            const current_user = await User.findOneAndUpdate(
                { username: user },
                {
                    $addToSet: {
                        activities: activity._id,
                    },
                }
            );
            return activity;
        },
        addLikeActivity: async (parent, { activityId }) => {
            // const tempActivity = Activity.findbyId( activityId )
            // const increment = tempActivity.likes + 1;
            // console.log(increment)

            return Activity.findOneAndUpdate(
                { _id: activityId },
                { $inc: { likes: 1 } },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        addTodo: async (parent, { activityId, name }) => {
            return (await Todo.create({ activityId, name }));
        },
        updateTodo: async (parent, { todoId, status }) => {
            return Todo.findOneAndUpdate(
                { _id: todoId },
                { status },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        addReminder: async (parent, { activityId, title, time_interval }) => {
            return (await Reminder.create({ activityId, title, time_interval }));
        },
        updateCompleteReminder: async (parent, { reminderId }) => {
            return Reminder.findOneAndUpdate(
                { _id: reminderId },
                { $inc: { complete_count: 1 } },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },

        addComment: async (parent, { activityId, commentText }) => {
            return Activity.findOneAndUpdate(
                { _id: activityId },
                {
                    $addToSet: {
                        comments: { commentText },
                    },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeReminder: async (parent, { reminderId }) => {
         return Reminder.findOneAndUpdate(
                { _id: reminderId },
                {
                    $pull: { reminders: { _id: reminderId } },
                },
                { new: true }
            );
          },
          removeTodo: async (parent, { todoId }) => {
              return Todo.findOneAndUpdate(
                { _id: todoId },
                {
                  $pull: {todos: { _id: todoId } },
                },
                { new: true }
              );
          },

    }


};

module.exports = resolvers;

// const reminder = await Reminder.findOneAndDelete({ _id: reminderId });
//               await