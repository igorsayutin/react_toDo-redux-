import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import store from "../store";
import ToDoApp from "./ToDoApp";
import AuthorizationPageWithRouter from "../components/AuthorizationPage";

export default class App extends Component {
  setLoginAndPassword = (login, password) => {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);

    console.log(localStorage.login);
    console.log(localStorage.password);
  };

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          localStorage.login && localStorage.password ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={props =>
            !(localStorage.login && localStorage.password) ? (
              <AuthorizationPageWithRouter
                setLoginAndPassword={this.setLoginAndPassword}
              />
            ) : (
              <Redirect to="/todos" />
            )
          }
        />
        <PrivateRoute path="/todos" component={ToDoApp} />
      </Switch>
    );
  }
}
