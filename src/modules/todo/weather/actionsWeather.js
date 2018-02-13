import * as actionTypes from "./actionTypesWeather";

export const fetchWeatherByLocation = result => ({
  type: actionTypes.FETCH_WEATHER_BY_LOCATION,
  result
});

export const fetchLocation = result => ({
  type: actionTypes.FETCH_LOCATION,
  result
});

export const getLocation = () => {
  const locationURL = `https://ipapi.co/json`;
  return dispatch => {
    return fetch(locationURL)
      .then(response => response.json())
      .catch(error => {
        console.log("unable to get location " + error);
      })
      .then(data => dispatch(fetchLocation(data)));
  };
};

export const getWeatherByLocation = obj => {
  console.log(obj);
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
      .then(data => dispatch(fetchWeatherByLocation(data)));
  };
};
