import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import ToDoApp from "./ToDoApp";
import AuthorizationPageWithRouter from "./AuthorizationPage";
import { withRouter } from "react-router";

export default class App extends Component {
  setLoginAndPassword = (login, password) => {
    localStorage.setItem(login, password);
  };

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          localStorage.length ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
    // const AuthorizationPageWithRouter = withRouter(AuthorizationPage);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <AuthorizationPageWithRouter
                  setLoginAndPassword={this.setLoginAndPassword}
                />
              )}
            />
            <PrivateRoute path="/todos" component={ToDoApp} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
