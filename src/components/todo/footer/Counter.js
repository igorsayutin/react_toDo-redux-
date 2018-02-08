import React, { Component } from "react";
import PropTypes from "prop-types";

function Counter({ items }) {
  const counter = items.filter(item => !item.isChecked).length;
  const counterLabel =
    counter === 1 ? `${counter} item left` : `${counter} items left`;

  return <span className="text-left col-3 pr-1">{counterLabel}</span>;
}

Counter.propTypes = {
  items: PropTypes.array.isRequired
};

export default Counter;
