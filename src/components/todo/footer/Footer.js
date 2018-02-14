import React, { Component } from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import Counter from "./Counter";
import ClearCompleted from "./ClearCompleted";

function Footer({ items, clearCompletedTodos, updateView }) {
  if (!items.length) return null;

  return (
    <footer className="d-flex align-items-center p-0 mb-4">
      <Counter items={items} />
      <Filters updateView={updateView} />
      <ClearCompleted items={items} clearCompletedTodos={clearCompletedTodos} />
    </footer>
  );
}

Footer.propTypes = {
  items: PropTypes.array.isRequired,
  clearCompletedTodos: PropTypes.func.isRequired,
  updateView: PropTypes.func.isRequired
};

export default Footer;
