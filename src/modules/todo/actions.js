import * as actionTypes from "./actionTypes";

export const addTodo = value => ({
  type: actionTypes.ADD_TODO,
  value
});
export const removeTodo = key => ({
  type: actionTypes.REMOVE_TODO,
  key
});
export const selectAll = value => ({
  type: actionTypes.SELECT_ALL,
  value
});
export const toggleTodoItem = key => ({
  type: actionTypes.TOGGLE_TODO_ITEM,
  key
});
export const clearCompletedTodos = () => ({
  type: actionTypes.CLEAR_COMPLETED_TODOS
});
export const onSubmitEditingInput = (key, value) => ({
  type: actionTypes.ON_SUBMIT_EDITING_INPUT,
  key,
  value
});
export const updateView = status => ({
  type: actionTypes.UPDATE_VIEW,
  status
});
