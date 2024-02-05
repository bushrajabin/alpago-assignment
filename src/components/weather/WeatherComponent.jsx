// WeatherComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/mock-apis/data/visualcrossingcom-weather.json`,
          console.log(response)
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData && (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* Add more weather details as needed */}
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;

