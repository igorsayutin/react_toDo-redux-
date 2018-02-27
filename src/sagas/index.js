import { fork } from "redux-saga/effects";
import { getData, setData } from "./fetchServerDataSaga";
// import { fetchWeather } from "./fetchWeatherSaga";

export default function* rootSaga() {
  yield fork(getData);
  yield fork(setData);
  // yield fork(fetchWeather);
}
