import moment from "moment";
import React from "react";

function Forecast({ data }) {
  const currentWeather = data.forecast.forecastday[0].hour;
  return (
    <div className="forecast">
      <h2>Current Weather</h2>
      <div className="row">
        {currentWeather.map((weather) => (
          <div key={weather.time_epoch} className="card">
            <span>{moment(weather.time).format("h:mm a")}</span>
            <img src={weather.condition.icon} alt="weather icon" />
            <p>
              {weather.temp_c}
              <span>&#8451;</span>
            </p>
          </div>
        ))}
      </div>

      <h2>Future Forecast</h2>
      {data.forecast.forecastday.map((futureWeather) => (
        <div key={futureWeather.date_epoch}>
          <div className="row">
            {futureWeather.hour.map((weather) => (
              <div key={weather.time_epoch} className="card">
                <span>{moment(weather.time).format("h:mm a")}</span>
                <img src={weather.condition.icon} alt="weather icon" />
                <p>
                  {weather.temp_c}
                  <span>&#8451;</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
