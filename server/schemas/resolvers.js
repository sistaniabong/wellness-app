const { User, Activity, Reminder, Todo } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            console.log('here')
            return User.find().populate('activities')
                .populate({
                    path: 'activities',
                    populate: ['reminders', 'todos']
                });
        },


        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('activities')
                .populate({
                    path: 'activities',
                    populate: ['reminders', 'todos']
                })
        },

        // activities by user
        activities: async (parent, { username }) => {
            return Activity.find({ user: username }).populate(['reminders', 'todos', 'comments']).sort({ createdAt: -1 });
        },
        // activity by activity id
        activity: async (parent, { activityId }) => {
            return Activity.findOne({ _id: activityId }).populate(['reminders', 'todos','comments']);
        },
        // all activities across users
        allActivities: async () => {
            return Activity.find().populate(['reminders', 'todos', 'comments']).sort({ createdAt: -1 });
        },

        // reminder by activity id
        activityReminders: async (parent, { activityId }) => {
            return Reminder.find({ activity: activityId }).populate(['activity']);
        },
        //all reminders
        allReminders: async () => {
            return Reminder.find().sort({ createdAt: -1 }).populate(['activity']);
        },

        // single reminder by reminder id
        reminder: async (parent, { reminderId }) => {
            return Reminder.findOne({ _id: reminderId }).populate(['activity']);
        },

        // todo by acitivity id
        activityTodos: async (parent, { activityId }) => {
            return Todo.find({ activity: activityId }).populate(['activity']);
        },
        // all todos
        allTodos: async () => {
            return Todo.find().sort({ createdAt: -1 }).populate(['activity']);
        },
        // single todo by reminder id
        todo: async (parent, { todoId }) => {
            return Todo.findOne({ _id: todoId }).populate(['activity']);
        },

        // me: async (parent, args, context) => {
        //     if (context.user) {
        //         return User.findOne({ _id: context.user._id }).populate('activities')
        //             .populate({
        //                 path: 'activities',
        //                 populate: ['reminders', 'todos']
        //             });
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // },

    },
    Mutation: {
        // add the signup and login mutations
        signup: async (parent, args) => {
            console.log('init signup')
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) {
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
            const todo = await Todo.create({ activity: activityId, name: name })
            const activity = await Activity.findOneAndUpdate(
                { _id: activityId },
                {
                    $addToSet: {
                        todos: todo._id,
                    },
                }
            ).populate("todos");
            await Todo.populate(todo,{path:"activity"})
            return todo;
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
            const reminder = await Reminder.create({ activity: activityId, title: title, time_interval: time_interval })
            const activity = await Activity.findOneAndUpdate(
                { _id: activityId },
                {
                    $addToSet: {
                        reminders: reminder._id,
                    },
                }
            );
            await Reminder.populate(reminder,{path:"activity"})
            return reminder;
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
        // removeReminder: async (parent, { reminderId }) => {
        //  return Reminder.findOneAndUpdate(
        //         { _id: reminderId },
        //         {
        //             $pull: { reminders: { _id: reminderId } },
        //         },
        //         { new: true }
        //     );
        //   },

          removeReminder: async (parent, { reminderId }) => {
            return Reminder.findOneAndDelete({ _id: reminderId });
          },
        //   removeTodo: async (parent, { todoId }) => {
        //       return Todo.findOneAndUpdate(
        //         { _id: todoId },
        //         {
        //           $pull: {todos: { _id: todoId } },
        //         },
        //         { new: true }
        //       );
        //   },
          removeTodo: async (parent, { todoId }) => {
            return Todo.findOneAndDelete({ _id: todoId });
          },

    }


};

module.exports = resolvers;

// const reminder = await Reminder.findOneAndDelete({ _id: reminderId });
//               await