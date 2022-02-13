import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ACTIVITIES_ALL_USERS} from '../utils/queries'
import DashboardList from '../components/DashboardList/DashboardList'

// use activity from MERN #20

const Dashboard = () => {

    // need to get activities list of all users -> GET_ACTIVITIES_ALL_USERS 

    const { loading, data } = useQuery(GET_ACTIVITIES_ALL_USERS);
    const activities = data?.allActivities || [];
    console.log(activities)


    
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

    

    // handlebuttons for reminder page and pro plan page
    
    return (
        <div>
            <DashboardList
                activities={activities}
              />

              
            {/* <p> heyyyyyys</p> */}
            {/* set a reminder button */}

            {/* <Link className="m-2 waves-effect waves-light btn-large" style="border-radius: 10px;" to={'/setup'}
            onClick={}>Set a reminder</Link>
            {/* pro plan page Link */}
            {/* <Link className="m-2 waves-effect waves-light btn-large" style="border-radius: 10px;" to={'/proplan'}onClick={}>Pro Plan</Link>
            {/* logout Link */}
            {/* <Link className="m-2 waves-effect waves-light btn-large" style="border-radius: 10px;" to={'/'} onClick={}>Logout</Link> */}
        </div>
    )
}

export default Dashboard;