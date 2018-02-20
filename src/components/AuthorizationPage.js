import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  handleLoginChange = e => {
    this.setState({ login: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  handleFormData = e => {
    const { login, password } = this.state;
    e.preventDefault();
    if (login && password) {
      this.props.setLoginAndPassword(login, password);
      this.props.history.push("/todos");
    }
  };

  render() {
    return (
      <div className="card col-5 text-center mx-auto p-3 mb-2">
        <h3>Authorization</h3>
        <form onSubmit={e => this.handleFormData(e)} className="px-3">
          <div className="row mb-3">
            <label htmlFor="loginInput">Login: </label>
            <input
              type="text"
              id="loginInput"
              value={this.state.login}
              placeholder="Enter your login"
              onChange={this.handleLoginChange}
              className="form-control"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="passwordInput">Password: </label>
            <input
              type="password"
              id="passwordInput"
              value={this.state.password}
              placeholder="Enter your password"
              onChange={this.handlePasswordChange}
              className="form-control"
            />
          </div>
          <button type="submit" className=" btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

const AuthorizationPageWithRouter = withRouter(AuthorizationPage);
export default AuthorizationPageWithRouter;
