import * as actionTypes from "./actionTypes";

const initialState = {
  weatherData: {}
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        weatherData: action.result
      };

    default:
      return state;
  }
};

export default weather;
