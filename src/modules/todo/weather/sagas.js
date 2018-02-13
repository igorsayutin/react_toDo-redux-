import { put, all, call } from "redux-saga/effects";
import { fetchWeatherForecastSuccess } from "./actionsWeather";

export default function* onFetchWeather() {
  const location_url = `http://ip-api.com/json`;
  const weather_url = `http://api.openweathermap.org/data/2.5/weather?appid=3b2dce7c397645e8583f51b27d0279dc&units=metric`;
  let target_url = yield call(function* fetchLocation() {
    try {
      const location = yield fetch(location_url).then(response =>
        response.json()
      );
      let weatherByLocation = `${weather_url}&lat=${location.lat}&lon=${
        location.lon
      }`;
      return weatherByLocation;
    } catch (e) {
      yield put(console.log(e));
      return;
    }
  });
  yield call(function* fetchWeatherByLocation() {
    try {
      const weather = yield fetch(target_url).then(response => response.json());
      yield put(fetchWeatherForecastSuccess(weather));
    } catch (e) {
      yield put(console.log(e));
      return;
    }
  });
}
