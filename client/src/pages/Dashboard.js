import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ACTIVITIES_ALL_USERS } from "../utils/queries";
import DashboardList from "../components/DashboardList/DashboardList";
import Auth from '../utils/auth';

// use activity from MERN #20

const Dashboard = () => {
  // need to get activities list of all users -> GET_ACTIVITIES_ALL_USERS

  const { loading, data } = useQuery(GET_ACTIVITIES_ALL_USERS);
  const activities = data?.allActivities || [];
  console.log(activities);

  const username = Auth.getProfile().data.username;
  console.log(username)


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
          <DashboardList activities={activities} />

          <button style={{
              borderRadius: "10px",
              textDecoration: "none",
              color: "white",
              fontSize: "15px",
              width: "130px",
              // background: "#2b7870",
              // position: "fixed",
            }} className="m-2 waves-effect waves-light btn-floating " onClick={logout}>
            Logout
          </button>
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
            className="m-2 waves-effect waves-light btn-floating "
            to={`/activitycreate/${username}`}
          >
            Add Activity
          </Link>
        </>
      ) : (
        <>
        <h3>
          {/* You need to be logged in to share your thoughts. Please go to {' '}  */}
          <Link style={{
              borderRadius: "10px",
              textDecoration: "none",
              color: "white",
              fontSize: "15px",
              width: "130px",
              // background: "#2b7870",
              // position: "fixed",
            }} className="btn btn-lg btn-info m-2" to="/">
            Home
          </Link>
        </h3>
        </>
      )}

    </div>
  );
};

export default Dashboard;
