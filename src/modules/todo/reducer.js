import * as actionTypes from "./actionTypes";

const initialState = {
  toDoList: [],
  filter: {
    activeFilter: "all",
    filteredList: []
  }
};

const updateView = status => {
  switch (status) {
    case "unchecked":
      initialState.filter = {
        activeFilter: "unchecked",
        filteredList: initialState.toDoList.filter(item => !item.isChecked)
      };
      break;
    case "checked":
      initialState.filter = {
        activeFilter: "checked",
        filteredList: initialState.toDoList.filter(item => item.isChecked)
      };
      break;
    case "all":
      initialState.filter = {
        activeFilter: "all",
        filteredList: initialState.toDoList.slice()
      };
      break;
  }
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        toDoList: [
          ...state.toDoList,
          {
            text: action.value.trim(),
            isChecked: false,
            id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(
              36
            )
          }
        ]
      };

    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.filter(item => item.id !== action.key)
      };

    case actionTypes.TOGGLE_TODO_ITEM:
      return {
        ...state,
        toDoList: state.toDoList.map(item => {
          if (item.id === action.key) {
            return {
              ...item,
              isChecked: !item.isChecked
            };
          }
          return { ...item };
        })
      };

    case actionTypes.SELECT_ALL:
      return {
        ...state,
        toDoList: state.toDoList.map(item => {
          return {
            ...item,
            isChecked: action.value ? false : true
          };
        })
      };

    case actionTypes.CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        toDoList: state.toDoList.filter(item => !item.isChecked)
      };

    case actionTypes.ON_SUBMIT_EDITING_INPUT:
      if (action.value) {
        return {
          ...state,
          toDoList: state.toDoList.filter(item => item.id !== action.key)
        };
      } else {
        return {
          ...state,
          toDoList: state.toDoList.map(item => {
            if (item.id === action.key) {
              return {
                ...item,
                text: action.value
              };
            }
            return { ...item };
          })
        };
      }
    case actionTypes.UPDATE_VIEW:
      updateView(state.filter.activeFilter);
      return {
        ...state
      };

    default:
      return state;
  }
};

export default todo;
