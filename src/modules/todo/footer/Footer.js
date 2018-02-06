import React, { Component } from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import Counter from "./Counter";
import BtnClearCompleted from "./BtnClearCompleted";

function Footer({ items, clearCompletedTodos, updateView }) {
  if (!items.length) return null;

  return (
    <footer className="d-flex align-items-center col-12 p-0">
      <Counter items={items} />
      <Filters updateView={updateView} />
      <BtnClearCompleted
        items={items}
        clearCompletedTodos={clearCompletedTodos}
      />
    </footer>
  );
}

Footer.propTypes = {
  items: PropTypes.array,
  clearCompletedTodos: PropTypes.func,
  updateView: PropTypes.func
};

export default Footer;
