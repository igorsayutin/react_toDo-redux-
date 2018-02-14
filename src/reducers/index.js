import { combineReducers } from "redux";
import todo from "./toDoReducer";
import weather from "./weatherReducer";

export default combineReducers({ todo, weather });
