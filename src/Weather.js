import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <main className="Weather">
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city" id="city">
            Chicago
          </h1>
          <p className="weather-app-details">
            <span id="time">11:38</span>,
            <span id="description"> it is pleasant</span>
            <br />
            Humidity: <strong id="humidity">0%</strong>, Wind
            <strong id="wind">9 miles/hour</strong>
          </p>
        </div>

        <div className="weather-app-temperature-container">
          <div id="icon">☀️</div>
          <div className="weather-app-temperature" id="temperature">
            68
          </div>
          <div className="weather-app-unit">ºF</div>
        </div>
      </div>
      <div class="weather-forecast" id="forecast"></div>
    </main>
  );
}
