{/* use <Link> to connect each activities */}

import { useQuery } from '@apollo/client';

// use activity form MERN #20

const Dashboard = () => {
    const { loading, data } = useQuery(QUERY_MATCHUPS, {
        fetchPolicy: "no-cache"
      });

      
}