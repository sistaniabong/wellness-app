import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
import Activity from './pages/Activity';
import Countdown from './pages/Countdown';
import Setup from './pages/Setup';
import Summary from './pages/Summary';
// import Login from ...

import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

// for authentication
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// can be deleted if we add authentication
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <ApolloProvider client={client}>
        <Router> 
          <div className="background flex-column justify-center align-center min-100-vh bg-primary">
            <Header />
            {/* <Home /> */}
            {/* <Activity /> */}
            {/* <Countdown /> */}
            {/* <Setup /> */}
            <Dashboard />
              {/* <Switch>
                <Route exact path="/">
                  <Home />  
                </Route>

                <Route exact path="/dashboard/:username">
                  <Dashboard />
                </Route> 

                <Route exact path="/activitysetup/:username">
                  <Activity />
                </Route>

                <Route exact path="/activitysetup/:activityId">
                  <Setup />
                </Route>

                <Route exact path="/activity/:activityId">
                  <Countdown />
                </Route> 

                <Route exact path="/proplan/:username">
                  <ProPlan />
                </Route>

                <Route exact path="/summary/:activityId">
                  <Summary />
                </Route>
              </Switch> */}

            <Footer />
          </div>   
        </Router> 
    </ApolloProvider>
  );
}


{/* to display all users' activities + the set new acitivity + progress buttons
  <Route exact path="/dashboard/:username">
                  <Dashboard />
                </Route>  */} 

                // create activity  ->activityform
                // <Route exact path="/activitysetup/:username">
                //   <Activity />
                // </Route>

              // create reminders and todos  -> todoform reminderform
                // <Route exact path="/activitysetup/:activityId">
                //   <Setup />
                // </Route>
  
{/* FOR activity countdown page,consists of todoform (consists of 2 fx createtodo and updatetodo) and reminderform (consists of 2 fx createreminder and updatereminder)components
  <Route exact path="/activity/:activityId">
<Countdown />
</Route>  */}

export default App;
