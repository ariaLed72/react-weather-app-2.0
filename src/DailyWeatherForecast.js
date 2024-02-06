import react from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyWeatherForecast.css";
import axios from "axios";

export default function DailyWeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let ApiKey = "ad793a6d772939c31783de5822791acf";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tues</div>
          <WeatherIcon code="01d" size={35} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-max">10°</span>
            <span className="WeatherForecast-min">4°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
