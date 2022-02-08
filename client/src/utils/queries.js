import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
    }
  }
`;

export const GET_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user (userId: $userId)
      _id
      username
      email
      activities {
        _id
        title
        duration
      }
    }
  }
`;


export const GET_REMINDERS = gql`
  query getReminders {
    reminders {
      _id
      title
      time_interval
      createdAt
    }
  }
`;

export const GET_SINGLE_REMINDER = gql`
  query getSingleReminder($reminderId: ID!) {
    reminder (reminderId: $reminderId) {
      _id
      title
      time_interval
      createdAt
      activites {
        _id
        title
        duration
      }
    }
  }
`;


export const GET_ACTIVITIES = gql`
  query getActivities {
    activites {
      _id
      title
      duration
      createdAt
    }
  }
`;

export const GET_SINGLE_ACTIVITY = gql`
  query getSingleActivity($activityId: ID!) {
    activity (activityId: $activityId) {
      _id
      title
      duration
      user {
        _id
        username
      } 
      comments {
        _id
        commentText
        createdAt
        reminders {
          _id
          title
          time_interval
          todos {
            name
            status
          }  
        }
      }
    }
  }
`;


export const GET_TODOS = gql`

`;

export const GET_SINGLE_TODO = gql`

`;





// Will come back for future developments: -KP

// export const GET_MOOD = gql`
//   query getMood {
//     mood {
//       _id
//       name
//       users {
//         _id
//         username
//       }
//     }
//   }
// `;