import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="Search" class="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1>Sydney</h1>
      <ul>
        <li>Last updated: DATE</li>
        <li>Description</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src="#" alt="desription" className="float-left" />

            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
