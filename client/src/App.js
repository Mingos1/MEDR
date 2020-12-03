import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm.jsx";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" />
          <Route path="/login" exact={true} component={LoginForm} />
          <Route path="/register" exact={true} component={RegisterForm} />
          <Route path="/user" exact={true} component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;

//
