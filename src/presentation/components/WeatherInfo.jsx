function WeatherInfo(currentData) {
  return (
    <div className="weather-info-container">
      <p>Weather as of {currentData.last_updated}</p>

      <div className="main-info-container">
        <img
          src={currentData.condition.icon}
          alt={currentData.condition.text}
        />
        <div className="temp-container">
          <p>Current temperature: {currentData.temp_c}°C</p>
          <p>Feels like: {currentData.feelslike_c}°C</p>
        </div>
      </div>

      <div className="additional-info">
        <p>Wind speed: {currentData.wind_kph} km/h</p>
        <p>Humidity: {currentData.humidity}%</p>
        <p>Cloud: {currentData.cloud}%</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
