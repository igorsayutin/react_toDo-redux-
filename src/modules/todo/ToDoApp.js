import React, { Component } from "react";
import ToDoList from "./list/ToDoList";
import Footer from "./footer/Footer";
import { getState, isAllChecked } from "./store";
import {
  addTodo,
  removeTodo,
  toggleTodoItem,
  selectAll,
  clearCompletedTodos,
  onSubmitEditingInput,
  updateView
} from "./actions";
import StoreEventBus from "../StoreEventBus";

class ToDoListApp extends Component {
  state = {
    ...getState(),
    valueMainInput: ""
  };

  componentDidMount() {
    StoreEventBus.register(payload => {
      if (payload.event) {
        this.setState(getState());
      }
    });
  }

  handleAddTodo = e => {
    if (e.keyCode === 13 && this.state.valueMainInput.trim()) {
      addTodo(this.state.valueMainInput);
      this.setState({
        valueMainInput: ""
      });
    }
  };

  onChangeMainInput = e => {
    this.setState({
      valueMainInput: e.target.value
    });
  };

  onBlurMainInput = e => {
    e.preventDefault();
    this.setState({
      valueMainInput: ""
    });
  };

  showCheckboxForAll = () => {
    if (this.state.toDoList.length) {
      return (
        <input
          type="checkbox"
          className="checkUncheckAll position-absolute"
          checked={isAllChecked()}
          onClick={selectAll}
        />
      );
    }
  };

  render() {
    const propsToDoList = {
      items: this.state.toDoList,
      removeTodo: removeTodo,
      check: toggleTodoItem,
      onSubmitEditingInput: onSubmitEditingInput,
      filteredList: this.state.filter.filteredList
    };
    const propsFooter = {
      items: this.state.toDoList,
      clearCompletedTodos: clearCompletedTodos,
      updateView: updateView
    };
    return (
      <div className="toDoList card p-3 text-center bg-light">
        <header className="text-success h1 mb-3">
          <h1>todos</h1>
        </header>
        <div className="main position-relative">
          {this.showCheckboxForAll()}
          <input
            type="text"
            className="col-12 h4 mb-3 p-2 pl-5"
            placeholder="What needs to be done?"
            onKeyDown={e => this.handleAddTodo(e)}
            onChange={this.onChangeMainInput}
            value={this.state.valueMainInput}
            onBlur={this.onBlurMainInput}
          />
          <ToDoList {...propsToDoList} />
        </div>
        <Footer {...propsFooter} />
      </div>
    );
  }
}
export default ToDoListApp;
