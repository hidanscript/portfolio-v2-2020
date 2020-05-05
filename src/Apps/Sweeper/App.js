import React from 'react';
import './css/App.css';

import Login from './Screens/Login';
import ChatBoard from './Screens/ChatBoard';

//react-router
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Route render={({location}) => (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/login" component={ Login } />
        <Route path="/chat" component={ ChatBoard } />
      </Switch>
    )} />
  );
}

export default App;
