import React from "react";
import { Route, Switch } from "react-router-dom";

//Apps CSS
//import './Apps/Sweeper/css/index.css';
import "./Apps/Sweeper/css/GlobalStyles.css";
import "./Apps/Sweeper/css/App.css";

//Screens
import Home from "./Screens/Home";
import Login from "./Apps/Sweeper/Screens/Login";
import ChatBoard from "./Apps/Sweeper/Screens/ChatBoard";

function App() {
  return (
    <Route
      render={({ location }) => (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apps/login" component={Login} />
          <Route path="/apps/chat" component={ChatBoard} />
        </Switch>
      )}
    />
  );
}

export default App;
