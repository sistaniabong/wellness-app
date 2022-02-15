import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ACTIVITIES_ALL_USERS } from "../utils/queries";
import DashboardList from "../components/DashboardList/DashboardList";

// use activity from MERN #20

const Dashboard = () => {
  // need to get activities list of all users -> GET_ACTIVITIES_ALL_USERS

  const { loading, data } = useQuery(GET_ACTIVITIES_ALL_USERS);
  const activities = data?.allActivities || [];
  console.log(activities);

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
      <DashboardList activities={activities} />

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
        //   to={`/proplan/${username}`}
      >
        Progress Tracker
      </Link>
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
        //   to={`/activitycreate/${username}`}
      >
        Add Activity
      </Link>
    </div>
  );
};

export default Dashboard;
