import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ACTIVITIES_ALL_USERS, GET_SINGLE_USER } from "../utils/queries";
import DashboardList from "../components/DashboardList/DashboardList";
import React from 'react';


// use activity from MERN #20

const Dashboard = () => {
  // need to get activities list of all users -> GET_ACTIVITIES_ALL_USERS

  const { loading, data }  = useQuery(GET_ACTIVITIES_ALL_USERS, GET_SINGLE_USER);

  
    // const { data } = useQuery(GET_SINGLE_USER)
    const username = data?.user || [];
    

  // *function to get all the data for the accomplishment from the completion page
  // const [dashList, { error}] = useQuery(GET_SINGLE_USER. {
  //     update(cache, { data: {dashList } }) {
  //         try {
  //          const { users } = cache.readQuery({ query: GET_SINGLE_USER });
  //         } catch {
  //             console.error(e);
  //         }
  //     }
  // })

  return (
    <div>
      <DashboardList activities={data?.allActivities || [] } username={username}/>

    </div>
  );
};

export default Dashboard;
