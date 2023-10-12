import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city"
            />
          </div>
          <div className="col-3">
            <input className="btn btn-info" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <h1>San Diego</h1>
      <ul>
        <li>Wednesday</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          23°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 59%</li>
            <li>Wind Speed; 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
