import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import EditAccount from "./pages/EditAccount";
import CreateReport from "./pages/CreateReport";
import EditReport from "./pages/EditReport";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute exact path="/edit-account" component={EditAccount} />
          <PrivateRoute exact path="/create-report" component={CreateReport} />
          <PrivateRoute exact path="/edit-report/:id" component={EditReport} />
        </Switch>
      </div>
    );
  }
}

export default App;
