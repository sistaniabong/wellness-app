import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_USER} from '../utils/queries'
import AccompList from '../components/AccompList/AccompList'
// import useState
// import route to route to the pages



// use activity from MERN #20

const Dashboard = () => {
    
    // *function to get all the data for the accomplishment from the completion page
    const [getAccomp, { error}] = useQuery(GET_SINGLE_USER. {
        update(cache, { data: {getAccomp } }) {
            try {
             const { users } = cache.readQuery({ query: GET_SINGLE_USER });   
            } catch {
                console.error(e);
            }
        }
        
       
    })
    

    // handlebuttons for reminder page and pro plan page
    
    return (
        <div>
            <AccompList accomplist={accomplist} />

            {/* set a reminder button */}

            <Link className="m-2 waves-effect waves-light btn-large" style="border-radius: 10px;" to={}
            onClick={}>Set a reminder</Link>
            {/* pro plan page Link */}
            <Link className="m-2 waves-effect waves-light btn-large" style="border-radius: 10px;" to={}onClick={}>Pro Plan</Link>
            {/* logout Link */}
            <Link className="m-2 waves-effect waves-light btn-large" style="border-radius: 10px;" to={} onClick={}>Logout</Link>
        </div>
    )
}

export default Dashboard;