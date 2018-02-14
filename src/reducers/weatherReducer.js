import * as actionTypes from "../actionTypes/weatherActionTypes";

const initialState = {
  weatherData: {},
  location: {}
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.result
      };

    case actionTypes.SET_LOCATION:
      return {
        ...state,
        location: {
          lat: action.result.latitude,
          lon: action.result.longitude
        }
      };

    default:
      return state;
  }
};

export default weather;
