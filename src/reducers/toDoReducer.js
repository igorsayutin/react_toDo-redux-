import * as actionTypes from "../actionTypes/toDoActionTypes";

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
            id: action.id
          }
        ]
      };

    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.filter(item => {
          if (item.id !== action.key) return { ...item };
        })
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
        toDoList: state.toDoList.filter(item => {
          if (!item.isChecked) return { ...item };
        })
      };

    case actionTypes.ON_SUBMIT_EDITING_INPUT:
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

    case actionTypes.UPDATE_VIEW:
      if (!state.toDoList.length)
        return {
          ...state,
          filter: {
            activeFilter: "all",
            filteredList: []
          }
        };
      if (!action.status) action.status = state.filter.activeFilter;
      switch (action.status) {
        case "unchecked":
          return {
            ...state,
            filter: {
              activeFilter: "unchecked",
              filteredList: state.toDoList.filter(item => {
                if (!item.isChecked) return { ...item };
              })
            }
          };
        case "checked":
          return {
            ...state,
            filter: {
              activeFilter: "checked",
              filteredList: state.toDoList.filter(item => {
                if (item.isChecked) return { ...item };
              })
            }
          };
        case "all":
          return {
            ...state,
            filter: {
              activeFilter: "all",
              filteredList: state.toDoList.filter(item => ({ ...item }))
            }
          };
      }
    default:
      return state;
  }
};

export default todo;
