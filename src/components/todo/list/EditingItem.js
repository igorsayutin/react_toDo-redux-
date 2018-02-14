import React, { Component } from "react";
import PropTypes from "prop-types";

class EditingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueEditingItemInput: "",
      editingItem: null
    };
  }

  onChangeEditingInput = e => {
    this.setState({
      valueEditingItemInput: e.target.value
    });
  };

  onBlurEditingInput = e => {
    e.preventDefault();
    this.setState({
      valueEditingItemInput: e.target.value,
      editingItem: null
    });
  };

  moveCaretAtEnd = e => {
    let temp_value = e.target.value;
    e.target.value = "";
    e.target.value = temp_value;
  };

  editTodo = (e, id) => {
    e.preventDefault();
    this.setState({
      valueEditingItemInput: this.props.items.filter(item => item.id === id)[0]
        .text,
      editingItem: id
    });
  };

  handleOnSubmitEditingInput = (e, id) => {
    let value = this.state.valueEditingItemInput;
    if (e.key === "Enter") {
      if (!value) this.props.removeTodo(id);
      this.props.onSubmitEditingInput(id, value);
      this.setState({
        valueEditingItemInput: "",
        editingItem: null
      });
    }
  };

  render() {
    const { task, id } = this.props;
    if (this.state.editingItem === id) {
      return (
        <input
          className="col-11"
          id={id}
          type="text"
          onChange={e => this.onChangeEditingInput(e)}
          onBlur={e => this.onBlurEditingInput(e)}
          onKeyPress={e => this.handleOnSubmitEditingInput(e, id)}
          value={this.state.valueEditingItemInput}
          onFocus={e => this.moveCaretAtEnd(e)}
          autoFocus
        />
      );
    } else {
      return (
        <label
          className="m-0 p-0 col-11"
          onDoubleClick={e => this.editTodo(e, id)}
        >
          {task.text}
        </label>
      );
    }
  }
}

EditingItem.propTypes = {
  task: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
  onSubmitEditingInput: PropTypes.func.isRequired
};
export default EditingItem;
