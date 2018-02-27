import { put, takeLatest, select } from "redux-saga/effects";
import { setStoreDataFromServer, updateView } from "../actions/toDoActions";

export function* getData() {
  yield takeLatest("GET_SERVER_DATA", getToDos);
}
export function* setData(data) {
  yield takeLatest("SET_SERVER_DATA", setToDos);
}

const fetchData = url => fetch(url).then(res => res.json());

function* getToDos() {
  try {
    const todos = yield fetchData("http://localhost:1337/todos/");
    yield put(setStoreDataFromServer(todos));
    yield put(updateView());
  } catch (err) {
    yield put(setStoreDataFromServer([]));
    yield put(updateView());
  }
}

function* setToDos() {
  const { toDoList: data } = yield select(({ todo }) => todo);
  try {
    fetch("http://localhost:1337/todos/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    });
  } catch (err) {
    console.log(err);
  }
}
