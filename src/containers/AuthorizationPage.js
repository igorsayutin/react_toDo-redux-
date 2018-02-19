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
      this.props.setLoginAndPassword(password);
      this.props.history.push("/todos");
    }
  };

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="card col-5 text-center mx-auto p-3 mb-2">
        <h3>Authorization</h3>
        <form onSubmit={e => this.handleFormData(e)}>
          {/* <div className="row mb-3"> */}
          <label htmlFor="loginInput">Login: </label>
          <input
            type="text"
            id="loginInput"
            value={this.state.login}
            onChange={this.handleLoginChange}
          />
          {/* </div> */}
          {/* <div className="row"> */}
          <label htmlFor="passwordInput">Password: </label>
          <input
            type="password"
            id="passwordInput"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          {/* </div> */}
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

const AuthorizationPageWithRouter = withRouter(AuthorizationPage);
export default AuthorizationPageWithRouter;
