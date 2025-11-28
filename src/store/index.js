import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import createSagaMiddleware from "redux-saga";
import { weatherWatcher } from "../sagas/weatherSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(weatherWatcher);
