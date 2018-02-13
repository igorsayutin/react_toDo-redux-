import { put, select } from "redux-saga/effects";
import { setWeatherData, setLocation } from "./actionsWeather";

const locationURL = `https://ipapi.co/json`;
const weatherURL = `http://api.openweathermap.org/data/2.5/weather?appid=3b2dce7c397645e8583f51b27d0279dc&units=metric`;
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

export default function* fetchWeather() {
  try {
    const locationRes = yield fetch(locationURL);
    const location = JSON.parse(locationRes);

    yield put(setLocation(location));
  } catch (err) {
    yield put(setLocation(defaultLocation));
  }

  const { location } = yield select(({ weather }) => weather);
  const { lon, lat } = location;
  const targetURL = `${weatherURL}&lat=${lat}&lon=${lon}`;
  try {
    const weatherData = yield fetch(targetURL);
    const parsedWeatherData = JSON.parse(weatherData);

    yield put(setWeatherData(parsedWeatherData));
  } catch (e) {
    yield put(setWeatherData(defaultWeatherData));
  }
}
