import * as actionTypes from "./actionTypesWeather";

export const fetchWeatherForecastSuccess = result => ({
  type: actionTypes.FETCH_WEATHER_FORECAST_SUCCESS,
  result
});

// export const fetchWeather = () => {
//   const request_url = `http://api.openweathermap.org/data/2.5/weather?appid=3b2dce7c397645e8583f51b27d0279dc&units=metric`;
//   return dispatch => {
//     return fetch(`${request_url}&q=Kharkiv`)
//       .then(response => response.json())
//       .catch(error => {
//         console.log("unable to get weather " + error);
//       })
//       .then(data => {
//         dispatch(fetchWeatherForecastSuccess(data));
//       });
//   };
// };

// let location_url = `http://ip-api.com/json`;
// fetch(location_url)
//       .then(response => response.json())
//       .catch(error => {
//         console.log("unable to get location " + error);
//       })
//       .then(data =>
