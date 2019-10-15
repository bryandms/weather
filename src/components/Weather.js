import React from "react";

const Weather = ({ result }) => {
  const { name, main } = result;

  if (!name) return null;

  const kelvin = 273.15;

  return (
    <div className="p-10 blurred-box">
      <div className="rounded overflow-hidden shadow-lg px-6 py-4">
        <h2 className="pb-3">The weather of {name} is:</h2>

        <p className="pb-3 text-4xl">
          {parseInt(main.temp - kelvin, 10)}{" "}
          <span className="text-xl">&#x2103;</span>
        </p>

        <p className="pb-3">
          Maximum temperature: {parseInt(main.temp_max - kelvin, 10)} &#x2103;
        </p>

        <p className="pb-3">
          Minimum temperature: {parseInt(main.temp_min - kelvin, 10)} &#x2103;
        </p>
      </div>
    </div>
  );
};

export default Weather;
