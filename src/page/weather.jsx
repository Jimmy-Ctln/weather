import { SearchBar } from "../components/search-bar";
import { useState } from "react";
import SunAndCloud from "../assets/sun&cloud.svg";
import Wind from "../assets/wind.svg";

export const Weather = () => {
  const [data, setData] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const acces_key = process.env.REACT_APP_ACCES_KEY;

  async function fetchWeather(location) {
    try {
      const response = await fetch(
        `${baseUrl}current?access_key=${acces_key}&query=${location}`,
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
              <img src={SunAndCloud} alt="" />
              <div className="flex flex-col items-center text-white">
                <p className="text-5xl">{data?.current?.temperature}°</p>
                <div className="flex gap-2 mt-2">
                  <p className="text-xl">Min.:20°</p>
                  <p className="text-xl">Max.:31°</p>
                </div>
                <div className="bg-black bg-opacity-40 w-full h-16 rounded-xl mt-8 flex justify-center">
                  <div className="flex items-center gap-2 justify-center items">
                    <img className="w-8 h-auto" src={Wind} alt="" />
                    <p>{data?.current?.wind_speed}km/h</p>
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
