import { useState } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import TextField from "./components/InputTextField";
import WeatherState from "../data/WeatherState";
import WeatherInfo from "./components/WeatherInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherRequest } from "../store/weatherSlice";

function App() {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.weather);

  const handleCity = (city) => {
    dispatch(fetchWeatherRequest({ city }));
  };

  const [textFieldState, setTextFieldState] = useState("");

  let content;

  switch (status) {
    case WeatherState.INIT:
      content = <p>{WeatherState.INIT}</p>;
      break;
    case WeatherState.LOADING:
      content = <p>{WeatherState.LOADING}</p>;
      break;
    case WeatherState.INCORRECT_TEXT:
      content = <p>{WeatherState.INCORRECT_TEXT}</p>;
      break;
    case WeatherState.SUCCESS:
      content = WeatherInfo(data.current);
      break;
    default:
      content = <p>{WeatherState.ERROR}</p>;
  }

  return (
    <div>
      <TextField
        value={textFieldState}
        onValueChange={setTextFieldState}
        onSearchClick={() => handleCity(textFieldState)}
      />
      {content}
    </div>
  );
}

export default App;
