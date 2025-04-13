import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function ShowCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={ShowCelsius}>
            °C
          </a>{" "}
        </span>
      </span>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit">
          <a href="/" onClick={ShowFahrenheit}>
            °F{" "}
          </a>
          | °C{" "}
        </span>
      </span>
    );
  }
}
