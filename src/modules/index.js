import { combineReducers } from "redux";
import todo from "./todo/reducer";
import weather from "./todo/weatherReducer";

export default combineReducers({ todo, weather });
