import { SET_LOCATION, SET_WEATHER_DATA } from "./actionTypesWeather";

export const setWeatherData = result => ({
  type: SET_WEATHER_DATA,
  result
});

export const setLocation = result => ({
  type: SET_LOCATION,
  result
});

export const getLocation = () => {
  const locationURL = `https://ipapi.co/json`;
  return dispatch => {
    return fetch(locationURL)
      .then(response => response.json(), reject => 0)
      .catch(error => {
        console.log("unable to get location " + error);
      })
      .then(data => dispatch(setLocation(data)));
  };
};

export const getWeatherByLocation = obj => {
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?appid=3b2dce7c397645e8583f51b27d0279dc&units=metric`;
  let targetURL = `${weatherURL}&lat=${obj.location.lat}&lon=${
    obj.location.lon
  }`;
  return dispatch => {
    return fetch(targetURL)
      .then(response => response.json())
      .catch(error => {
        console.log("unable to get location " + error);
      })
      .then(data => dispatch(setWeatherData(data)));
  };
};
