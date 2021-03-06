/* global location */
/* eslint no-restricted-globals: ["off", "location"] */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    valueMainInput: ""
  };

  handleAddTodo = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (!this.state.valueMainInput) return;
      let id = Math.floor(+new Date() + Math.random() * 0xffffffff).toString(
        36
      );
      this.props.addTodo(this.state.valueMainInput, id);
      this.setState({
        valueMainInput: ""
      });
    }
  };

  onChangeMainInput = e => {
    this.setState({
      valueMainInput: e.target.value.trim()
    });
  };

  onBlurMainInput = e => {
    e.preventDefault();
    this.setState({
      valueMainInput: ""
    });
  };

  isAllChecked = () => this.props.items.every(item => item.isChecked);

  showCheckboxForAll = () => {
    if (this.props.items.length) {
      return (
        <input
          type="checkbox"
          className="toggleCheckAll position-absolute"
          checked={this.isAllChecked()}
          onClick={() => this.props.selectAll(this.isAllChecked())}
        />
      );
    }
  };

  logout = () => {
    localStorage.removeItem("loginForToDo");
    localStorage.removeItem("passwordForToDo");
  };

  render() {
    return (
      <header className="text-success h1 mb-3">
        <div className="clearfix">
          <Link
            to="/"
            className="btn-sm btn-secondary float-right m-0"
            onClick={this.logout}
          >
            Logout
          </Link>
        </div>
        <h1 className="col-12 mb-2">todos</h1>

        <form className="position-relative">
          {this.showCheckboxForAll()}
          <input
            type="text"
            className="col-12 h4 mb-3 p-2 pl-5 text-dark"
            placeholder="What needs to be done?"
            onKeyDown={e => this.handleAddTodo(e)}
            onChange={e => this.onChangeMainInput(e)}
            value={this.state.valueMainInput}
            onBlur={this.onBlurMainInput}
          />
        </form>
      </header>
    );
  }
}

Header.propTypes = {
  items: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
  selectAll: PropTypes.func.isRequired
};

export default Header;
