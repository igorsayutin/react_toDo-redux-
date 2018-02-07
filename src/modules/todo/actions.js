import * as actionTypes from "./actionTypes";

export const addTodo = value => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_TODO,
      value
    });
    dispatch({
      type: actionTypes.UPDATE_VIEW
    });
  };
};
export const removeTodo = key => {
  return dispatch => {
    dispatch({
      type: actionTypes.REMOVE_TODO,
      key
    });
    dispatch({
      type: actionTypes.UPDATE_VIEW
    });
  };
};
export const selectAll = value => {
  return dispatch => {
    dispatch({
      type: actionTypes.SELECT_ALL,
      value
    });
    dispatch({
      type: actionTypes.UPDATE_VIEW
    });
  };
};
export const toggleTodoItem = key => {
  return dispatch => {
    dispatch({
      type: actionTypes.TOGGLE_TODO_ITEM,
      key
    });
    dispatch({
      type: actionTypes.UPDATE_VIEW
    });
  };
};
export const clearCompletedTodos = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.CLEAR_COMPLETED_TODOS
    });
    dispatch({
      type: actionTypes.UPDATE_VIEW
    });
  };
};
export const onSubmitEditingInput = (key, value) => {
  return dispatch => {
    dispatch({
      type: actionTypes.ON_SUBMIT_EDITING_INPUT,
      key,
      value
    });
    dispatch({
      type: actionTypes.UPDATE_VIEW
    });
  };
};
export const updateView = status => ({
  type: actionTypes.UPDATE_VIEW,
  status
});
