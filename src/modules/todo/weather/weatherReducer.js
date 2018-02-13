import * as actionTypes from "./actionTypesWeather";

const initialState = {
  weatherData: {},
  location: {}
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_BY_LOCATION:
      return {
        ...state,
        weatherData: action.result
      };

    case actionTypes.FETCH_LOCATION:
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
