import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import ToDoApp from "./modules/todo/ToDoApp";
import store from "./modules/todo/store";

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById("root")
);
