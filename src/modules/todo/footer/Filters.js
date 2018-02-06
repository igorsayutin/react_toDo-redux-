import React, { Component } from "react";
import PropTypes from "prop-types";

function Filters({ updateView }) {
  return (
    <div className="radios-as-buttons d-flex justify-content-center col-6 p-0 m-0 ">
      <div>
        <input
          type="radio"
          name="option"
          id="radio1"
          defaultChecked
          onClick={() => updateView("all")}
        />
        <label htmlFor="radio1">All</label>
      </div>
      <div>
        <input
          type="radio"
          name="option"
          id="radio2"
          onClick={() => updateView("unchecked")}
        />
        <label htmlFor="radio2">Active</label>
      </div>
      <div>
        <input
          type="radio"
          name="option"
          id="radio3"
          onClick={() => updateView("checked")}
        />
        <label htmlFor="radio3">Completed</label>
      </div>
    </div>
  );
}

Filters.propTypes = {
  updateView: PropTypes.func
};

export default Filters;
