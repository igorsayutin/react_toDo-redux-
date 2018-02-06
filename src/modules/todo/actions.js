import Dispatcher from "../Dispatcher";
import * as actionTypes from "./actionTypes";

export const addTodo = value => {
  return Dispatcher.dispatch({
    type: actionTypes.ADD_TODO,
    value
  });
};
export const removeTodo = key => {
  return Dispatcher.dispatch({
    type: actionTypes.REMOVE_TODO,
    key
  });
};
export const selectAll = () => {
  return Dispatcher.dispatch({
    type: actionTypes.SELECT_ALL
  });
};
export const toggleTodoItem = key => {
  return Dispatcher.dispatch({
    type: actionTypes.TOGGLE_TODO_ITEM,
    key
  });
};
export const clearCompletedTodos = () => {
  return Dispatcher.dispatch({
    type: actionTypes.CLEAR_COMPLETED_TODOS
  });
};
export const onSubmitEditingInput = (key, value) => {
  return Dispatcher.dispatch({
    type: actionTypes.ON_SUBMIT_EDITING_INPUT,
    key,
    value
  });
};
export const updateView = status => {
  return Dispatcher.dispatch({
    type: actionTypes.UPDATE_VIEW,
    status
  });
};
