import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
      activities {
        _id
        title
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

export const GET_SINGLE_USER = gql`
  query getSingleUser($username: String!) {
    user (username: $username){
      _id
      username
      email
      activities {
        _id
        title
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
`
// may not need since this will get us similar data as GET_SINGLE_USER
export const GET_ACTIVITIES_SINGLE_USER = gql`
  query getActivitiesSingleUser($username: String!) {
    activities (username: $username){
      _id
      title
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
`




export const GET_ACTIVITIES_ALL_USERS = gql`
  query getActivitiesAllUsers {
    allActivities {
      _id
      title
      duration
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
`;



export const GET_SINGLE_ACTIVITY = gql`
  query getSingleActivity($activityId: ID!) {
    activity (activityId: $activityId) {
      _id
      title
      duration
      user
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

// may not need
// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       activites {
//         _id
//         title
//         user
//         likes
//         createdAt
//         comments {
//           _id
//           commentText
//           createdAt
//         }
//         reminders {
//           _id
//           title
//           time_interval
//           complete_count
//           skip_count
//           createdAt
//         }
//         todos {
//           _id
//           name
//           status
//           createdAt
//         }
//       }
//     }
//   }
// `;

// Somehow Graphql don't like the title of the activity.But the activity _id is working
export const GET_ALL_TODOS = gql`
  query getAllTodos {
    allTodos {
      _id
      name
      status
      createdAt
      activity {
        _id 
        title
      }
    }
  }
`;

export const GET_SINGLE_ACTIVITY_TODOS = gql`
  query getSingleActivityTodos($activityId: ID!) {
    activityTodos(activityId: $activityId) {
      _id
      name
      status
      createdAt
      activity {
        _id
        title
      }
    }
  }
`;

// if needed we can get todo with the todo id
export const GET_SINGLE_TODO = gql`
    query getSingleTodo($todoId: ID!) {
        todo(todoId: $todoId ){
          _id
          name
          status
          createdAt
          activity {
            _id
            title
          }
        }        
  }
`;


export const GET_ALL_REMINDERS = gql`
  query getAllReminders {
    allReminders {
      _id
      title
      time_interval
      complete_count
      createdAt
    }
  }
`;

export const GET_SINGLE_ACTIVITY_REMINDERS = gql`
  query getSingleActivityReminders($activityId: ID!) {
    activityReminders(activityId: $activityId) {
      _id
      title
      time_interval
      complete_count
      createdAt
      activity {
        _id
        title
      }
    }
  }
`;

// if needed we can get reminder with the reminder id
export const GET_SINGLE_REMINDER = gql`
  query getSingleReminder($reminderId: ID!) {
    reminder(reminderId: $reminderId ){
      _id
      title
      time_interval
      complete_count
      createdAt
      activity {
        _id
        title
      }
      }        
}
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