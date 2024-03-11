import { SearchBar } from "../components/search-bar";
import { useState } from "react";
import { WeatherIcon } from "../components/weather-icon";

import Wind from "../assets/wind.svg";

export const Weather = () => {
  const [data, setData] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  async function fetchWeather(location) {
    try {
      const response = await fetch(
        `${baseUrl}q=${location}&appid=${apiKey}&units=metric`,
        {
          method: "GET",
        }
      );
      console.log(response);
      const weatherInfo = await response.json();

      if (response.status === 200) {
        setData(weatherInfo);
        setIsValid(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function convertKelvintoCelsius(data) {
    const result = Math.round(data)
    return result
  }
  

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div
        className={`flex bg-gradient-to-t from-[#29B2DD] to-blue-800 rounded-xl ${
          isValid
            ? "h-[50rem] items-start py-8 flex-col"
            : "h-[5rem] items-center"
        }`}
      >
        <SearchBar fetchWeather={fetchWeather} />
        {isValid && (
          <div className="h-full w-full flex justify-center">
            <div>
              <WeatherIcon cloudcover={0}/>
              <div className="flex flex-col items-center text-white">
                <p className="text-5xl">{convertKelvintoCelsius(data?.main.temp)}°</p>
                <div className="flex gap-2 mt-2">
                  <p className="text-xl">Min.: {convertKelvintoCelsius(data?.main.temp_min)}°</p>
                  <p className="text-xl">Max.:  {convertKelvintoCelsius(data?.main.temp_max)}°</p>
                </div>
                <div className="bg-black bg-opacity-40 w-full h-16 rounded-xl mt-8 flex justify-center">
                  <div className="flex items-center gap-2 justify-center items">
                    <img className="w-8 h-auto" src={Wind} alt="" />
                    <p>{convertKelvintoCelsius(data?.wind?.speed)}km/h</p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
