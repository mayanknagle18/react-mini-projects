import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric");

  const dummyWeather = {
    name: "Indore",
    sys: {
      country: "IN",
    },
    weather: [
      {
        description: "clear sky",
        icon: "01d",
      },
    ],
    main: {
      temp: 29,
      feels_like: 30,
      humidity: 65,
      temp_min: 27,
      temp_max: 32,
      pressure: 1012,
    },
    wind: {
      speed: 4.2,
    },
  };

  const getWeather = () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      if (city.trim().toLowerCase() === "indore") {
        setWeather(dummyWeather);
      } else {
        setWeather(null);
        setError("City not found");
      }

      setLoading(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  const getTemperature = (temperature) => {
    if (unit === "metric") {
      return Math.round(temperature);
    }

    return Math.round((temperature * 9) / 5 + 32);
  };

  const getWindSpeed = (speed) => {
    if (unit === "metric") {
      return speed;
    }

    return (speed * 2.237).toFixed(1);
  };

  return (
    <div className="weather_app">
      <div className="weather_container">
        <h1>🌤️ Weather App</h1>

        {/* Search */}
        <form onSubmit={handleSubmit} className="search_box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>

        {/* Loading */}
        {loading && <div className="loading">Loading weather...</div>}

        {/* Error */}
        {error && <div className="error">❌ {error}</div>}

        {/* Weather Card */}
        {weather && !loading && (
          <div className="weather_card">
            {/* Header */}
            <div className="weather_header">
              <div>
                <h2>
                  {weather.name}, {weather.sys.country}
                </h2>

                <p>{weather.weather[0].description}</p>
              </div>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
            </div>

            {/* Temperature */}
            <div className="temperature">
              {getTemperature(weather.main.temp)}
              {unit === "metric" ? "°C" : "°F"}
            </div>

            {/* Unit Button */}
            <button type="button" className="unit_button" onClick={toggleUnit}>
              Switch to {unit === "metric" ? "°F" : "°C"}
            </button>

            {/* Weather Details */}
            <div className="weather_details">
              <div className="detail_box">
                <span>🌡️</span>
                <p>Feels Like</p>
                <strong>
                  {getTemperature(weather.main.feels_like)}
                  {unit === "metric" ? "°C" : "°F"}
                </strong>
              </div>

              <div className="detail_box">
                <span>💧</span>
                <p>Humidity</p>
                <strong>{weather.main.humidity}%</strong>
              </div>

              <div className="detail_box">
                <span>💨</span>
                <p>Wind Speed</p>
                <strong>
                  {getWindSpeed(weather.wind.speed)}
                  {unit === "metric" ? " m/s" : " mph"}
                </strong>
              </div>

              <div className="detail_box">
                <span>🔽</span>
                <p>Min Temp</p>
                <strong>
                  {getTemperature(weather.main.temp_min)}
                  {unit === "metric" ? "°C" : "°F"}
                </strong>
              </div>

              <div className="detail_box">
                <span>🔼</span>
                <p>Max Temp</p>
                <strong>
                  {getTemperature(weather.main.temp_max)}
                  {unit === "metric" ? "°C" : "°F"}
                </strong>
              </div>

              <div className="detail_box">
                <span>🌬️</span>
                <p>Pressure</p>
                <strong>{weather.main.pressure} hPa</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;