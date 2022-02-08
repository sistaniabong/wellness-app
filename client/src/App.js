import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import Home from './pages/Home';
// import Dashboar from './pages/Dashboar';
// import SetUpReminder from './pages/Setupreminder';
// import ToDoList from './pages/ToDoList';
// import Summary from './pages/Summary'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router> 
          <div className="background flex-column justify-center align-center min-100-vh bg-primary">
            <Header />
              {/* <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/dashboard/:userid">
                  <Dashboard />
                </Route>
                <Route exact path="/proplan/:userid">
                  <ProPlan />
                </Route>
                <Route exact path="/setupreminder/:activityid">
                  <SetUpReminder />
                </Route>
                <Route exact path="/todolist/:activityid">
                  <ToDoList />
                </Route>
                <Route exact path="/summary/:activityid">
                  <Summary />
                </Route>
              </Switch> */}
            <Footer />
          </div>   
        </Router> 
    </ApolloProvider>
  );
}

export default App;
