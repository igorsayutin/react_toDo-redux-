import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import fetchWeather from "./sagas/fetchWeatherSaga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(fetchWeather);
