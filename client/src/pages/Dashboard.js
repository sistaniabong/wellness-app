import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ACTIVITIES_ALL_USERS, GET_SINGLE_USER } from "../utils/queries";
import DashboardList from "../components/DashboardList/DashboardList";
import React from "react";
import Auth from "../utils/auth";

// use activity from MERN #20

const Dashboard = () => {

  const { loading, data } = useQuery(GET_ACTIVITIES_ALL_USERS, GET_SINGLE_USER);

  // const username = data?.user;
  // || [];

  const username = Auth.getProfile().data.username;
  console.log(username);
  

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

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <div id="fixedbtns">
            <button
              style={{
                borderRadius: "10px",
                textDecoration: "none",
                color: "white",
                fontSize: "13px",
                width: "70px",
                height: "30px"
                // background: "#2b7870",
                // position: "fixed",
              }}
              className="m-2 waves-effect waves-light btn-floating "
              onClick={logout}
            >
              Logout
            </button>
            <Link
              style={{
                borderRadius: "10px",
                textDecoration: "none",
                color: "white",
                fontSize: "13px",
                width: "90px",
                height: "30px",
                // justifyContent: "center"
                // background: "#2b7870",
                // position: "fixed",
              }}
              id="add-activity"
              className="m-2 waves-effect waves-light btn-floating "
              to={`/activitycreate/${username}`}
            >
              Add Activity
            </Link>
          </div>
          <DashboardList
            activities={data?.allActivities || []}
            username={username}
          />
        </>
      ) : (
        <>
          <h3>
            {/* You need to be logged in to share your thoughts. Please go to {' '}  */}
            <Link
              style={{
                borderRadius: "10px",
                textDecoration: "none",
                color: "white",
                fontSize: "15px",
                width: "130px",
                // background: "#2b7870",
                // position: "fixed",
              }}
              className="btn btn-lg btn-info m-2"
              to="/"
            >
              Home
            </Link>
          </h3>
        </>
      )}
    </div>
  );
};

export default Dashboard;
