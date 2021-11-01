import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form id="search-form" class="mb-3">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                class="form-control"
                id="city-input"
                autocomplete="off"
                autoFocus="on"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherInfo.city}</h1>
        <ul>
          <li>
            Last updated: <FormattedDate date={weatherInfo.date} />
          </li>
          <li>{weatherInfo.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherInfo.iconUrl}
                alt={weatherInfo.description}
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherInfo.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {Math.round(weatherInfo.humidity)}%</li>
              <li>Wind: {Math.round(weatherInfo.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
