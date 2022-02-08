import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Dashboar from './pages/Dashboar';
import SetUpReminder from './pages/Setupreminder';
import ToDoList from './pages/ToDoList';
import Summary from './pages/Summary'
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard/:id">
              <Dashboar />
            </Route>
            <Route exact path="/setupreminder/:id">
              <SetUpReminder />
            </Route>
            <Route exact path="/todolist/:id">
              <ToDoList />
            </Route>
            <Route exact path="/summary/:id">
              <Summary />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
