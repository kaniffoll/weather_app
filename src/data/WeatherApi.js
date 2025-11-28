const API_BASE = "https://api.weatherapi.com/v1/";
const API_KEY = "3bdbd4635739425e9f861348252110";
import WeatherState from "./WeatherState";

export async function getCurrentWeather(city) {
  try {
    const response = await fetch(
      `${API_BASE}current.json?key=${API_KEY}&q=${city}&aqi=no`
    );

    if (response.status === 400) {
      return { status: WeatherState.INCORRECT_TEXT, data: null };
    }

    const data = await response.json();
    return { status: WeatherState.SUCCESS, data: data };
  } catch (error) {
    console.error(error);
    return { status: WeatherState.ERROR, data: null };
  }
}
