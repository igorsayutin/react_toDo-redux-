import React, { Component } from "react";
import ToDoList from "./list/ToDoList";
import Footer from "./footer/Footer";
import {
  addTodo,
  removeTodo,
  toggleTodoItem,
  selectAll,
  clearCompletedTodos,
  onSubmitEditingInput,
  updateView
} from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ToDoApp extends Component {
  state = {
    valueMainInput: ""
  };

  handleAddTodo = e => {
    if (e.keyCode === 13 && this.state.valueMainInput.trim()) {
      this.props.actions.addTodo(this.state.valueMainInput);
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

  isAllChecked = () => this.props.todo.toDoList.every(item => item.isChecked);

  showCheckboxForAll = () => {
    if (this.props.todo.toDoList.length) {
      return (
        <input
          type="checkbox"
          className="checkUncheckAll position-absolute"
          checked={this.isAllChecked()}
          onClick={() => this.props.actions.selectAll(this.isAllChecked())}
        />
      );
    }
  };

  render() {
    const { toDoList, filter } = this.props.todo;
    const { actions } = this.props;
    const propsToDoList = {
      items: toDoList,
      removeTodo: actions.removeTodo,
      check: actions.toggleTodoItem,
      onSubmitEditingInput: actions.onSubmitEditingInput,
      filteredList: filter.filteredList
    };
    const propsFooter = {
      items: toDoList,
      clearCompletedTodos: actions.clearCompletedTodos,
      updateView: actions.updateView
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

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addTodo,
        removeTodo,
        toggleTodoItem,
        selectAll,
        clearCompletedTodos,
        onSubmitEditingInput,
        updateView
      },
      dispatch
    )
  };
};

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
