import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ToDoList from "../components/todo/list/ToDoList";
import Footer from "../components/todo/footer/Footer";
import Header from "../components/todo/header/Header";
import Weather from "../components/weather/Weather";
import {
  addTodo,
  removeTodo,
  toggleTodoItem,
  selectAll,
  clearCompletedTodos,
  onSubmitEditingInput,
  updateView
} from "../actions/toDoActions";
import { getLocation, getWeatherByLocation } from "../actions/weatherActions";

class ToDoApp extends Component {
  render() {
    const { toDoList, filter } = this.props.todo;
    const { weather, actions } = this.props;
    const propsHeader = {
      items: toDoList,
      addTodo: actions.addTodo,
      selectAll: actions.selectAll
    };
    const propsToDoList = {
      items: toDoList,
      removeTodo: actions.removeTodo,
      check: actions.toggleTodoItem,
      onSubmitEditingInput: actions.onSubmitEditingInput,
      filteredList: filter.filteredList
    };
    const propsFooter = {
      items: toDoList,
      clearCompletedTodos: actions.clearCompletedTodos,
      updateView: actions.updateView
    };
    const propsWeather = {
      weatherData: weather.weatherData,
      location: weather.location,
      getLocation: actions.getLocation,
      getWeatherByLocation: actions.getWeatherByLocation
    };
    return (
      <div className="container-fluid d-flex justify-content-around">
        <section className="toDoList card pt-3 pl-3 pr-3 mb-3 text-center bg-light col-9 d-flex align-self-start">
          <Header {...propsHeader} />
          <ToDoList {...propsToDoList} />
          <Footer {...propsFooter} />
        </section>
        <Weather {...propsWeather} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addTodo,
        removeTodo,
        toggleTodoItem,
        selectAll,
        clearCompletedTodos,
        onSubmitEditingInput,
        updateView,
        getLocation,
        getWeatherByLocation
      },
      dispatch
    )
  };
};

const mapStateToProps = state => {
  return {
    todo: state.todo,
    weather: state.weather
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
