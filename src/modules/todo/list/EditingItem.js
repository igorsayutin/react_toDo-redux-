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
    if (e.key === "Enter") {
      this.props.onSubmitEditingInput(id, this.state.valueEditingItemInput);
      this.setState({
        valueEditingItemInput: "",
        editingItem: null
      });
    }
  };

  render() {
    const { task, onSubmitEditingInput, id } = this.props;
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
  task: PropTypes.object,
  id: PropTypes.string,
  items: PropTypes.array,
  onSubmitEditingInput: PropTypes.func
};
export default EditingItem;
