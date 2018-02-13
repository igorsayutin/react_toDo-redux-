import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Weather extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }
  render() {
    const weatherData = this.props.weatherData;
    if (weatherData.cod !== 200) {
      return (
        <div className="col-2 text-center pt-3 d-flex-row align-self-start">
          Loading...
        </div>
      );
    }
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <section className="col-2 text-center pt-3 d-flex-row align-self-start">
        <h3>{weatherData.name}</h3>
        <p>
          {weather.main} <img src={iconUrl} alt={weatherData.description} />
        </p>
        <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </section>
    );
  }
}

Weather.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default Weather;
