import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path="/protected" component={PrivateRoute}/>
      </Router>
    );
  }
}

export default App;
