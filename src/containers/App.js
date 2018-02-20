import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ToDoApp from "./ToDoApp";
import AuthorizationPageWithRouter from "../components/AuthorizationPage";

export default class App extends Component {
  isAuthorized = () =>
    Boolean(localStorage.loginForToDo && localStorage.passwordForToDo);

  render() {
    let PrivateRoute = ({ component: Component, ...rest }) => {
      let routePath, isAuthorized;
      if (Component === ToDoApp) {
        routePath = "/";
        isAuthorized = this.isAuthorized();
      } else {
        routePath = "/todos";
        isAuthorized = !this.isAuthorized();
      }
      return (
        <Route
          {...rest}
          render={props =>
            isAuthorized ? (
              <Component {...props} />
            ) : (
              <Redirect to={routePath} />
            )
          }
        />
      );
    };

    return (
      <Switch>
        <PrivateRoute path="/" exact component={AuthorizationPageWithRouter} />
        <PrivateRoute path="/todos" component={ToDoApp} />
      </Switch>
    );
  }
}
