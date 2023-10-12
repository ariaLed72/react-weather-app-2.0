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
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-warning w-100"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>
      <h1>San Diego</h1>
      <ul>
        <li>Wednesday 13:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">23</span>
              <span className="unit">°C</span>
            </div>
          </div>
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
