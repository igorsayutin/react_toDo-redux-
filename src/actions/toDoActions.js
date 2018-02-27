import * as actionTypes from "../actionTypes/toDoActionTypes";

export const addTodo = (value, id) => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_TODO,
      value,
      id
    });
    dispatch(updateView());
  };
};
export const removeTodo = key => {
  return dispatch => {
    dispatch({
      type: actionTypes.REMOVE_TODO,
      key
    });
    dispatch(updateView());
  };
};
export const selectAll = value => {
  return dispatch => {
    dispatch({
      type: actionTypes.SELECT_ALL,
      value
    });
    dispatch(updateView());
  };
};
export const toggleTodoItem = key => {
  return dispatch => {
    dispatch({
      type: actionTypes.TOGGLE_TODO_ITEM,
      key
    });
    dispatch(updateView());
  };
};
export const clearCompletedTodos = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.CLEAR_COMPLETED_TODOS
    });
    dispatch(updateView());
  };
};
export const onSubmitEditingInput = (key, value) => {
  return dispatch => {
    dispatch({
      type: actionTypes.ON_SUBMIT_EDITING_INPUT,
      key,
      value
    });
    dispatch(updateView());
  };
};
export const updateView = status => ({
  type: actionTypes.UPDATE_VIEW,
  status
});

export const getServerData = () => ({
  type: actionTypes.GET_SERVER_DATA
});
export const setStoreDataFromServer = data => ({
  type: actionTypes.SET_STORE_DATA_FROM_SERVER,
  data
});

export const setServerData = () => ({
  type: actionTypes.SET_SERVER_DATA
});
