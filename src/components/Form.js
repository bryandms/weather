import React, { useState } from "react";

const Form = ({ getWeather }) => {
  const [search, setSearch] = useState({
    city: "",
    country: ""
  });

  const handleChange = e =>
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });

  const searchWeather = e => {
    e.preventDefault();
    getWeather(search);
  };

  return (
    <form className="py-5" onSubmit={searchWeather}>
      <div className="py-5">
        <input
          className="w-full appearance-none bg-transparent border-b border-b-2 border-blue-400 placeholder-black py-2 px-2 leading-tight focus:outline-none"
          type="text"
          name="city"
          id="city"
          placeholder="City"
          aria-label="City"
          onChange={handleChange}
        />
      </div>

      <div className="py-5">
        <select
          className="w-full appearance-none bg-transparent border-b border-b-2 border-blue-400 py-2 px-2 leading-tight focus:outline-none"
          name="country"
          id="country"
          onChange={handleChange}
        >
          <option value="">Country</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="PE">Perú</option>
        </select>
      </div>

      <div className="flex py-5">
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto"
          type="submit"
          value="Search the weather"
        />
      </div>
    </form>
  );
};

export default Form;
