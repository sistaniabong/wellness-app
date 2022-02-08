import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      activities {
        _id
        name
        reminders
      }
    }
  }
`

export const GET_REMINDERS = gql`
  query getReminders($reminderId: ID!) {
    reminders (reminderId: $reminderId) {
      _id
      name
      users {
        _id
        username
      }
    }
  }
`;

export const GET_SINGLE_REMINDER = gql`
  query getSingleReminder($reminderId: ID!) {
    reminder (reminderId: $reminderId) {
      _id
      name
      users {
        _id
        username
      }
    }
  }
`;


export const GET_ACTIVITIES = gql`
  query getActivities {
    activites {
      _id
      name
      users {
        _id
        username
      }
    }
  }
`;

export const GET_SINGLE_ACTIVITY = gql`
  query getSingleActivity($activityId: ID!) {
    activity (activityId: $activityId) {
      _id
      name
      users {
        username
        // will this arrary return properly?
       reminders
      }
    }
  }
`;

// may not need - double check with team

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