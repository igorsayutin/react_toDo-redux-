import { createStore, applyMiddleware } from "redux";
import rootReducer from "../../modules";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import fetchWeather from "./weather/fetchWeatherSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(fetchWeather);
