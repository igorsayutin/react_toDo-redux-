import { SET_LOCATION, SET_WEATHER_DATA } from "./actionTypesWeather";

const defaultLocation = {
  lat: 49.9808,
  lon: 36.2527
};
const defaultWeatherData = {
  coord: { lon: 36.25, lat: 49.98 },
  weather: [{ id: 600, main: "Snow", description: "light snow", icon: "13n" }],
  base: "stations",
  main: { temp: -6, pressure: 1017, humidity: 85, temp_min: -6, temp_max: -6 },
  visibility: 6000,
  wind: { speed: 4, deg: 80 },
  clouds: { all: 90 },
  dt: 1518537600,
  sys: {
    type: 1,
    id: 7355,
    message: 0.0028,
    country: "UA",
    sunrise: 1518497295,
    sunset: 1518533451
  },
  id: 706483,
  name: "Kharkiv",
  cod: 200
};

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
      .then(response => response.json(), reject => defaultLocation)
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
      .then(response => response.json(), reject => defaultWeatherData)
      .catch(error => {
        console.log("unable to get location " + error);
      })
      .then(data => dispatch(setWeatherData(data)));
  };
};
