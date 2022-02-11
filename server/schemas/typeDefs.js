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
    complete_count: Int
    skip_count: Int
    createdAt: String
    activity: Activity
  }

  type Activity {
    _id: ID
    title: String!
    duration: Int
    likes: Int
    createdAt: String
    comments: [Comment]
    reminders: [Reminder]
    todos: [Todo]
    user: User
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Todo {
    _id: ID
    name: String
    status: Boolean
    createdAt: String
    activity: Activity
  }


  type Auth {
    token: ID!
    users: [User]
  }
  

  type Query {
    users: [User]
    user(username: String!): User
    allActivities: [Activity]
    activities(username: String!): [Activity]
    activity(activityId: ID!): Activity
    reminders: [Reminder]
    reminder(activityId: ID!): [Reminder]
    todos: [Todo]
    todo(activityId: ID!): [Todo]
    me: User
  }


  type Mutation {
    signup(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addActivity(title: String!, duration: Int!, user: String!): Activity
    addLikeActivity( activityId: ID! ): Activity 
    addTodo(activityId: ID!, name: String!): Todo
    updateTodo(todoId: ID!, status: Boolean): Todo
    updateCompleteReminder(reminderId: ID!): Reminder
    addReminder(title: String!, time_interval: Int, activityId: ID!): Reminder
    addComment(activityId: ID!, commentText: String!): Activity
    removeReminder(reminderId: ID!): Reminder
    removeTodo(todoId: ID!): Todo
  }
`;

//   // NOT NEEDED AT THE MOMENT 
//   // type Mood {
//   //   _id: ID
//   //   title: String
//   //   scale: Int
//   //   # a field that will return an array of Users that have this mood
//   //   users: [User]
//   // }
module.exports = typeDefs;