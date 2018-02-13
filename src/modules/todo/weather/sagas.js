import { put, all, call, select } from "redux-saga/effects";
import { fetchWeatherByLocation, fetchLocation } from "./actionsWeather";

export default function* onFetchWeather() {
  const locationURL = `https://ipapi.co/json`;
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?appid=3b2dce7c397645e8583f51b27d0279dc&units=metric`;

  yield call(function* fetchLocation() {
    try {
      const location = yield fetch(locationURL).then(response =>
        response.json()
      );
      yield put(fetchLocation(location));
    } catch (e) {
      yield put(console.log(e));
      return;
    }
  });

  yield call(function* fetchWeatherByLocation() {
    try {
      const state = yield select();
      const targetURL = `${weatherURL}&lat=${state.weather.location.lat}&lon=${
        state.weather.location.lon
      }`;
      const weather = yield fetch(targetURL).then(response => response.json());
      yield put(fetchWeatherByLocation(weather));
    } catch (e) {
      yield put(console.log(e));
      return;
    }
  });
}
