import { combineReducers } from "redux";
import todo from "./todo/reducer";
import weather from "./todo/weather/weatherReducer";

export default combineReducers({ todo, weather });
