import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }
  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form id="search-form" class="mb-3" onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                class="form-control"
                id="city-input"
                autocomplete="off"
                autoFocus="on"
                onChange={handleCitySearch}
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
        <WeatherInfo data={weatherInfo} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
