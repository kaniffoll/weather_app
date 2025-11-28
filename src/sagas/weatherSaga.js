import { takeLatest } from "redux-saga/effects";
import { getCurrentWeather } from "../data/WeatherApi";
import { call, put } from "redux-saga/effects";
import { fetchWeatherResponse } from "../store/weatherSlice";

function* fetchWeatherWorker(action) {
  const weatherState = yield call(getCurrentWeather, action.payload.city);
  yield put(fetchWeatherResponse(weatherState));
}

export function* weatherWatcher() {
  yield takeLatest("weather/fetchWeatherRequest", fetchWeatherWorker);
}
