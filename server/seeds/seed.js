const db = require('../config/connection');
const { User, Activity, Todo, Reminder } = require('../models');
const userSeeds = require('./userSeeds.json');
const activitySeeds = require('./activitySeeds.json');
const todoSeeds = require('./todoSeeds.json');
const reminderSeeds = require('./reminderSeeds.json');


db.once('open', async () => {
    try {
        await Activity.deleteMany({});
        await User.deleteMany({});
        await Todo.deleteMany({});
        await Reminder.deleteMany({});


        await User.create(userSeeds);
        const todos = await Todo.insertMany(todoSeeds);
        console.log(todos)
        const reminders = await Reminder.insertMany(reminderSeeds);



        for (let i = 0; i < activitySeeds.length; i++) {
            const { _id, user } = await Activity.create(activitySeeds[i]);
            const current_user = await User.findOneAndUpdate(
                { username: user },
                {
                    $addToSet: {
                        activities: _id,
                    },
                }
            );
            //   add todo and associate todo with an activity
            const tempTodo = todos[Math.floor(Math.random() * todos.length)];
            tempTodo.activity = _id
            await tempTodo.save();
            

            // add todo to activity
            const todo = await Activity.findOneAndUpdate(
                { _id: _id },
                {
                    $addToSet: {
                        todos: tempTodo._id,
                    },
                }
            );
            
            //   add reminder and associate reminder with an activity
            const tempReminder = reminders[Math.floor(Math.random() * reminders.length)];
            tempReminder.activity = _id
            await tempReminder.save();
            // add reminder to activity
            const reminder = await Activity.findOneAndUpdate(
                { _id: _id },
                {
                    $addToSet: {
                        reminders: tempReminder._id,
                    },
                }
            );

        }



    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});
