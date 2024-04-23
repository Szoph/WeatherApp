"use client";
import Now from "./WeatherComponents/Now";
import SearchBar from "./WeatherComponents/SearchBar";
import NextDays from "./WeatherComponents/NextDays";
import Today from "./WeatherComponents/Today";
import Hourly from "./WeatherComponents/Hourly";
import {useState} from "react"; 

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [todayWeather, setTodayWeather] = useState({});
  const [nextWeather, setNextWeather] = useState({});



  return (
    <div className="min-w-screen min-h-screen h-full p-16 bg-[#319CC4] text-white flex lg:flex-row flex-col gap-4">
      <div className="flex flex-col lg:w-2/3 w-full">
      <SearchBar
      setLoading={setLoading}
      setShowWeather={setShowWeather}
      setTodayWeather={setTodayWeather}
      setNextWeather={setNextWeather}
      />
      {showWeather ? (
        <>
        <Now weatherData={todayWeather} />
        <Hourly weatherData={nextWeather} />
        <Today weatherData={todayWeather} 
        UVIndex={nextWeather.daily[0].uvi}/>
        
        </>
      ) : null}
      </div>
      <div className="flex lg:w-1/4 w-full">
        {showWeather ? (
          <NextDays
          weatherData={nextWeather}/>
        ) : null}
     
      </div>
     


    </div>
  )
}

export default HomePage