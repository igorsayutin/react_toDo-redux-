import Dispatcher from "../Dispatcher";
import StoreEventBus from "../StoreEventBus";
import * as actionTypes from "./actionTypes";
const store = {
  toDoList: [],
  filter: {
    activeFilter: "all",
    filteredList: []
  }
};

const updateView = status => {
  switch (status) {
    case "unchecked":
      store.filter = {
        activeFilter: "unchecked",
        filteredList: store.toDoList.filter(item => !item.isChecked)
      };
      break;
    case "checked":
      store.filter = {
        activeFilter: "checked",
        filteredList: store.toDoList.filter(item => item.isChecked)
      };
      break;
    case "all":
      store.filter = {
        activeFilter: "all",
        filteredList: store.toDoList.slice()
      };
      break;
  }
};

export const getState = () => {
  return store;
};

export const isAllChecked = () => {
  return store.toDoList.every(item => item.isChecked);
};

Dispatcher.register(payload => {
  switch (payload.type) {
    case actionTypes.ADD_TODO:
      store.toDoList = [
        ...store.toDoList,
        {
          text: payload.value.trim(),
          isChecked: false,
          id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36)
        }
      ];
      updateView(store.filter.activeFilter);
      break;

    case actionTypes.REMOVE_TODO:
      store.toDoList = store.toDoList.filter(item => item.id !== payload.key);
      updateView(store.filter.activeFilter);
      break;

    case actionTypes.TOGGLE_TODO_ITEM:
      store.toDoList = store.toDoList.map(item => {
        if (item.id === payload.key) {
          return {
            ...item,
            isChecked: !item.isChecked
          };
        }
        return { ...item };
      });
      updateView(store.filter.activeFilter);
      break;

    case actionTypes.SELECT_ALL:
      let isItChecked = isAllChecked();
      store.toDoList = store.toDoList.map(item => {
        return {
          ...item,
          isChecked: isItChecked ? false : true
        };
      });
      updateView(store.filter.activeFilter);
      break;

    case actionTypes.CLEAR_COMPLETED_TODOS:
      store.toDoList = store.toDoList.filter(item => !item.isChecked);
      updateView(store.filter.activeFilter);
      break;

    case actionTypes.ON_SUBMIT_EDITING_INPUT:
      !payload.value
        ? (store.toDoList = store.toDoList.filter(
            item => item.id !== payload.key
          ))
        : (store.toDoList = store.toDoList.map(item => {
            if (item.id === payload.key) {
              return {
                ...item,
                text: payload.value
              };
            }
            return { ...item };
          }));
      updateView(store.filter.activeFilter);
      break;

    case actionTypes.UPDATE_VIEW:
      updateView(payload.status);
      break;

    default:
      return false;
  }
  StoreEventBus.dispatch({
    event: "change"
  });
});

export default getState;
