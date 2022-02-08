const { AuthenticationError } = require('apollo-server-express');
const { User, Activity, Todo , Reminder } = require('../models')
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); // look at stripe documentation

// Query and mutation, export to use in client
const resolvers = {

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
      
            const token = signToken (user);
            return { token, user };
          }
    }
}

module.exports = resolvers;