import { gql } from '@apollo/client';

// Graphql "error message": "Cannot read property 'isCorrectPassword' of null"
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// graphql: user _id, username, email are null, need to fix
export const ADD_ACTIVITY = gql`
    mutation addActivity ($title: String!, $duration: Int!, $user: String!){
        addActivity(title: $title, duration: $duration, user: $user) {
            _id
            title
            user {
                _id
                username
                email
            }
            likes
            createdAt
        }
    }
`

export const ADD_LIKE_ACTIVITY = gql`
    mutation addLikeActivity ($activityId: ID!){
        addLikeActivity(activityId: $activityId) {
            _id
            title
            user {
                _id
                username
                email
            }
            likes
            createdAt
        }
    }
`

export const ADD_COMMENT_ACTIVITY = gql`
    mutation addComment ($activityId: ID!, $commentText: String! ){
        addComment(activityId: $activityId, commentText:$commentText ) {
            _id
            title
            user {
                _id
                username
                email
            }
            likes
            createdAt
        }
    }
`


export const ADD_TODO = gql`
    mutation addTodo ($activityId: ID!, $name: String!){
        addTodo(activityId: $activityId, name: $name) {
            _id
            name
            status
            createdAt
            activity{
                _id
                title
            }
        }
    }
`
// graphql : activity _id and title is null?
export const ADD_REMINDER = gql`
    mutation addReminder ($activityId: ID!, $title: String!, $time_interval: Int!){
        addReminder(activityId: $activityId, title: $title, time_interval:$time_interval) {
            _id
            title
            time_interval
            complete_count
            skip_count
            createdAt
            activity{
                _id
                title
            }
        }
    }
`


// graphql doesn't recognize the activity title, but the _id worked
export const UPDATE_TODO = gql`
    mutation updateTodo ($todoId: ID!, $status: Boolean!){
        updateTodo(todoId: $todoId, status: $status) {
            _id
            name
            status
            createdAt
            activity{
                _id
                title
            }
        }
    }
`
// the activity _id and title are null
export const UPDATE_COMPLETE_REMINDER = gql`
    mutation updateCompleteReminder($reminderId: ID!){
        updateCompleteReminder(reminderId: $reminderId) {
            _id
            title
            time_interval
            complete_count
            activity{
                _id
                title
            }
        }
    }
`

// not remove from the reminder list
export const REMOVE_REMINDER = gql `
    mutation removeReminder($reminderId: ID!){
        removeReminder(reminderId:$reminderId){
            _id
            title
        }
    }
`

// not remove from the todo list
export const REMOVE_TODO = gql `
    mutation removeTodo($todoId: ID!){
        removeTodo(todoId:$todoId){
            _id
            name
        }
    }
`