"use client"; 
import {useState, useEffect} from "react";
import {getWeatherByCity, getWeatherByCoords} from "@/utils/ApiClient";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const SearchBar = ({ setShowWeather, setLoading, setNextWeather, setTodayWeather }) => {
  const [searchText, setSearchText] = useState("");
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);

  const handleSearchText = (event) => {
    const { value } = event.target;
    setSearchText(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    if (!searchText) {
      toast.warn("Please enter a city name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }) 
      return
    }
    try {
      const todayWeather = await getWeatherByCity(searchText);
      const lat = todayWeather.coord.lat;
      const lon = todayWeather.coord.lon;
      setTodayWeather(todayWeather); 
      const nextWeather = await getWeatherByCoords(lat, lon);
      setNextWeather(nextWeather);
      setShowWeather(true)
    } catch (error) {
      console.log(error, "Error fetching weather data");
      toast.error("Error fetching weather data. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setLoading(false);
    setSearchText("");
  }


  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div className=" w-3/4 bg-[#00699E] rounded-md flex items-center justify-center">
        <input className="w-full focus:outline-white bg-[#00699E] rounded-md text-white placeholder-gray-300 p-2 text-lg" 
        type="text" 
        placeholder="Search for cities"
        value={searchText}
        onChange={handleSearchText} />
        <button type="submit" className="px-4 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar