import * as actionTypes from "./actionTypes";

const initialState = {
  toDoList: [],
  filter: {
    activeFilter: "all",
    filteredList: []
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
      if (!action.value) {
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
      if (!action.status) action.status = state.filter.activeFilter;
      switch (action.status) {
        case "unchecked":
          return {
            ...state,
            filter: {
              activeFilter: "unchecked",
              filteredList: state.toDoList.filter(item => !item.isChecked)
            }
          };
        case "checked":
          return {
            ...state,
            filter: {
              activeFilter: "checked",
              filteredList: state.toDoList.filter(item => item.isChecked)
            }
          };
        case "all":
          return {
            ...state,
            filter: {
              activeFilter: "all",
              filteredList: state.toDoList.slice()
            }
          };
      }

    default:
      return state;
  }
};

export default todo;
