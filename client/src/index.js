import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./routes/login/login";
import Register from "./routes/register/register.js";
// import Dashboard from "./components/Dashboard";
import Home from "./routes/home/home";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* <Route path="/user" /> */}
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
