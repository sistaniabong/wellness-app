const { AuthenticationError } = require('apollo-server-express');
// const { User, Activity, Mood, Reminder } = require('./models)
// require auth token
// const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); // look at stripe documentation

// Query and mutation, export to use in client
module.exports = {
    Query: {
        users: () => {
            return await User.find();
        }
    },

    // add the authentication 
    Mutation: {
        createUser
    }
}