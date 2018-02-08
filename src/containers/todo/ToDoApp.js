import React, { Component } from "react";
import ToDoList from "../../components/todo/list/ToDoList";
import Footer from "../../components/todo/footer/Footer";
import Header from "../../components/todo/header/Header";
import {
  addTodo,
  removeTodo,
  toggleTodoItem,
  selectAll,
  clearCompletedTodos,
  onSubmitEditingInput,
  updateView
} from "../../modules/todo/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ToDoApp extends Component {
  render() {
    const { toDoList, filter } = this.props.todo;
    const { actions } = this.props;
    const propsHeader = {
      items: toDoList,
      actions: actions
    };
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
        <Header {...propsHeader} />
        <ToDoList {...propsToDoList} />
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
