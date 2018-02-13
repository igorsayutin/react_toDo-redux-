import { createStore, applyMiddleware } from "redux";
import rootReducer from "../../modules";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import onFetchWeather from "./weather/sagas";

const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(onFetchWeather);
