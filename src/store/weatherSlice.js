import { createSlice } from "@reduxjs/toolkit";
import WeatherState from "../data/WeatherState";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    status: WeatherState.INIT,
    data: null,
  },
  reducers: {
    fetchWeatherRequest: (state) => {
      state.status = WeatherState.LOADING;
      state.data = null;
    },
    fetchWeatherResponse: (state, action) => {
      state.data = action.payload.data;
      state.status = action.payload.status;
    },
  },
});

export const { fetchWeatherRequest, fetchWeatherResponse } =
  weatherSlice.actions;

export default weatherSlice.reducer;
