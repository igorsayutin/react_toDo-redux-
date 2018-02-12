import * as actionTypes from "./actionTypes";

export const addTodo = (value, id) => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_TODO,
      value,
      id
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

export const fetchWeatherForecastSuccess = result => ({
  type: actionTypes.FETCH_WEATHER_FORECAST_SUCCESS,
  result
});

export const fetchWeather = () => {
  let location_url = `http://ip-api.com/json`;
  let request_url = `http://api.openweathermap.org/data/2.5/weather?appid=3b2dce7c397645e8583f51b27d0279dc&units=metric`;
  return dispatch => {
    return fetch(location_url)
      .then(response => response.json())
      .catch(error => {
        console.log("unable to get location " + error);
      })
      .then(data => fetch(`${request_url}&lat=${data.lat}&lon=${data.lon}`))
      .then(response => response.json())
      .catch(error => {
        console.log("unable to get weather " + error);
      })
      .then(respData => {
        dispatch(fetchWeatherForecastSuccess(respData));
      });
  };
};
