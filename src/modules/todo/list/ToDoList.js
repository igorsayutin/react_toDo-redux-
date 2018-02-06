import React, { Component } from "react";
import PropTypes from "prop-types";
import EditingItem from "./EditingItem";

function ToDoList({
  items,
  removeTodo,
  check,
  onSubmitEditingInput,
  filteredList
}) {
  return (
    <ul className="list-group col-12 text-center p-0 mb-3">
      {filteredList.map(task => {
        return (
          <li
            className="itemsToDo list-group-item text-left d-flex justify-content-between h5 col-12"
            key={task.id}
          >
            <div className="d-flex align-items-center col-11 p-0">
              <input
                className="mr-3 mb-0 h2"
                type="checkbox"
                checked={task.isChecked}
                onChange={() => check(task.id)}
              />
              <EditingItem
                task={task}
                id={task.id}
                items={items}
                onSubmitEditingInput={onSubmitEditingInput}
              />
            </div>
            <button
              className="deleteButton text-danger text-center pl-2 pr-2 m-0 my-auto"
              onClick={() => removeTodo(task.id)}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ToDoList.propTypes = {
  items: PropTypes.array,
  check: PropTypes.func,
  removeTodo: PropTypes.func,
  onSubmitEditingInput: PropTypes.func,
  filteredList: PropTypes.array
};

export default ToDoList;
