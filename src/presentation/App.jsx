import { useEffect, useState } from "react";
import "./App.css";
import { getCurrentWeather } from "../data/WeatherApi";
// eslint-disable-next-line no-unused-vars
import TextField from "./components/InputTextField";
import WeatherState from "../data/WeatherState";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [weatherState, setWeatherState] = useState({
    status: WeatherState.INIT,
    data: null,
  });
  const [textFieldState, setTextFiledState] = useState("");
  const [searchButtonState, setSearchButtonState] = useState(false);

  useEffect(() => {
    if (textFieldState === "") {
      return;
    }

    (async () => {
      const data = await getCurrentWeather(textFieldState);
      setWeatherState(data);
    })();
  }, [searchButtonState]);

  let content;

  switch (weatherState.status) {
    case WeatherState.INIT:
      content = <p>{WeatherState.INIT}</p>;
      break;
    case WeatherState.INCORRECT_TEXT:
      content = <p>{WeatherState.INCORRECT_TEXT}</p>;
      break;
    case WeatherState.SUCCESS:
      content = WeatherInfo(weatherState.data.current);
      break;
    default:
      content = <p>{WeatherState.ERROR}</p>;
  }

  return (
    <div>
      <TextField
        value={textFieldState}
        onValueChange={setTextFiledState}
        onSearchClick={() => setSearchButtonState(!searchButtonState)}
      />
      {content}
    </div>
  );
}

export default App;
