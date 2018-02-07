import React, { Component } from "react";
import PropTypes from "prop-types";

function BtnClearCompleted({ items, clearCompletedTodos }) {
  if (!items.length) return null;
  let isChecked = items.some(item => item.isChecked);
  if (isChecked) {
    return (
      <button
        className="clearCompletedBtn col-3 p-0"
        onClick={() => clearCompletedTodos()}
      >
        Clear completed
      </button>
    );
  } else return null;
}

BtnClearCompleted.propTypes = {
  items: PropTypes.array.isRequired,
  clearCompletedTodos: PropTypes.func.isRequired
};

export default BtnClearCompleted;
