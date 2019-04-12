import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login';
import FriendsListView from './views/FriendsListView';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Login}/>
        <PrivateRoute path="/protected" component={FriendsListView}/>
      </Router>
    );
  }
}

export default App;
