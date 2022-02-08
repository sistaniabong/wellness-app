const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    activities:[Activity]
  }

  type Reminder {
    _id: ID
    title: String
    time_interval: Int
    complete_count:
    skip_count: Int
    createdAt: String
    activities: [Activity]
  }

  type Activity {
    _id: ID
    title: String!
    duration: Int
    likes: Int
    createdAt: String
    comments: [Comment]
    reminders: [Reminder]
    users: [User]
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Todo {
    id: ID
    name: String
    status: Boolean
    createdAt: String
    activities: [Activity]
  }


  type Auth {
    token: ID!
    users: [User]
  }

  type Query {
    reminders: [Reminder]
    activities: [Activity]
    todos: [Todo]
    users:[User]
  }

  type Mutation {
    # connect with sistania for mutations.js file
  }



  // NOT NEEDED AT THE MOMENT
  // type Mood {
  //   _id: ID
  //   title: String
  //   scale: Int
  //   # a field that will return an array of Users that have this mood
  //   users: [User]
  // }

`;
module.exports = typeDefs;