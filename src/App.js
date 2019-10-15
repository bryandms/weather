import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (city === "") return;

    const getWeatherApi = () => {
      const appId = process.env.REACT_APP_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

      fetch(url)
        .then(resp => resp.json())
        .then(resp => setResult(resp));
    };

    getWeatherApi();
  }, [city, country]);

  const getWeather = data => {
    if (data.city === "" || data.country === "") {
      setError(true);
      return;
    }

    setCity(data.city);
    setCountry(data.country);
    setError(false);
  };

  let component;
  if (error) {
    component = <Error message="Both fields are required" />;
  } else if (result.cod === "404") {
    component = <Error message="City not found" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <div>
      <Header />

      <div className="flex flex-wrap container mx-auto px-4">
        <div className="w-full md:w-1/2">
          <Form getWeather={getWeather} />
        </div>

        <div className="w-full md:w-1/2">{component}</div>
      </div>
    </div>
  );
}

export default App;
