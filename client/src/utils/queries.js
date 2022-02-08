import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      activities {
        _id
        title
        durations
      }
    }
  }
`
// will not need this as we are getting reminders from activities

// export const GET_REMINDERS = gql`
//   query getReminders($reminderId: ID!) {
//     reminders (reminderId: $reminderId) {
//       _id
//       name
//       users {
//         _id
//         username
//       }
//     }
//   }
// `;

//  should get reminder(s) per activity id  not the reminder id
// export const GET_SINGLE_REMINDER = gql`
//   query getSingleReminder($reminderId: ID!) {
//     reminder (reminderId: $reminderId) {
//       _id
//       name
//       users {
//         _id
//         username
//       }
//     }
//   }
// `;


// export const GET_ACTIVITIES = gql`
//   query getActivities {
//     activites {
//       _id
//       title
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

export const GET_ACTIVITIES = gql`
  query getActivities {
    activites {
      _id
      title
      user
      likes
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;


// export const GET_SINGLE_ACTIVITY = gql`
//   query getSingleActivity($activityId: ID!) {
//     activity (activityId: $activityId) {
//       _id
//       name
//       users {
//         username
//         // will this arrary return properly?
//        reminders
//       }
//     }
//   }
// `;

export const GET_SINGLE_ACTIVITY = gql`
  query getSingleActivity($activityId: ID!) {
    activity (activityId: $activityId) {
      _id
      name
      user
      comments {
        _id
        commentText
        createdAt
      }
      reminders {
        _id
        title
        time_interval
        complete_count
        skip_count
        createdAt
      }
      todos {
        _id
        name
        status
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      activites {
        _id
        title
        user
        likes
        createdAt
        comments {
          _id
          commentText
          createdAt
        }
        reminders {
          _id
          title
          time_interval
          complete_count
          skip_count
          createdAt
        }
        todos {
          _id
          name
          status
          createdAt
        }
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