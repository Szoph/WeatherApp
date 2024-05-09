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

  const handleIcon = (icon) => {
    if (icon === '01d') {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#FFC946" d="M8 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 1m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m6.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM8 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 13M2.5 8.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm.646-5.354a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.708l-1-1a.5.5 0 0 1 0-.708m.708 9.708a.5.5 0 1 1-.708-.707l1-1a.5.5 0 0 1 .708.707zm9-9.708a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708m-.708 9.708a.5.5 0 0 0 .708-.707l-1-1a.5.5 0 0 0-.708.707z"/></svg>
    } else if (icon === '01n') {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#C6C1C2" d="M7.456 2a6 6 0 1 1-5.406 8.605a.5.5 0 0 1 .36-.71c1.276-.231 3.278-.937 4.078-3.07c.563-1.5.512-3.015.283-4.23a.5.5 0 0 1 .475-.591Q7.35 2 7.456 2"/></svg>
    } else if (icon === '02d') {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#C1C1C3" d="M8.999 6a3.5 3.5 0 0 0-3.464 3H5.5a2.5 2.5 0 0 0 0 5h7a2.5 2.5 0 0 0 0-5h-.037A3.5 3.5 0 0 0 9 6m-.212-3.18a.5.5 0 1 0-.883-.47l-.426.803a.5.5 0 0 0 .883.47zm-3.772-.747a.5.5 0 1 0-.957.293l.267.87a.5.5 0 0 0 .956-.293zM3 7c0 .604.179 1.166.486 1.637c.367-.259.787-.45 1.24-.551a4.51 4.51 0 0 1 3.56-3.03A3 3 0 0 0 3 7M1.82 4.214a.5.5 0 1 0-.47.883l.803.426a.5.5 0 0 0 .47-.883zm.416 4.463a.5.5 0 0 0-.293-.956l-.87.266a.5.5 0 1 0 .293.956z"/></svg>
    } else if (icon === '02n') {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#C6C1C2" d="M26.003 16.01c6.337 0 9.932 4.194 10.455 9.26h.16c4.078 0 7.384 3.297 7.384 7.365S40.696 40 36.617 40H15.389c-4.078 0-7.384-3.297-7.384-7.365s3.306-7.365 7.384-7.365h.16c.526-5.1 4.118-9.26 10.455-9.26M13.182 8.002c1.59.086 3.134.544 4.526 1.348a10.1 10.1 0 0 1 4.418 5.193c-4.016 1.144-6.877 4.083-8.027 8.049l-.092.332l-.115.476l-.413.077a9.35 9.35 0 0 0-5.617 3.632l-.308-.172a10.1 10.1 0 0 1-3.285-3.028A1.502 1.502 0 0 1 5 21.644c3.285-1.176 5.055-2.5 6.067-4.432c1.105-2.11 1.31-4.348.576-7.354a1.502 1.502 0 0 1 1.539-1.856"/></svg>
    } else if (icon === '03d' || icon === '03n' || icon === '04d' || icon === '04n') {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#C6C1C2" d="M13.002 7.009c3.168 0 4.966 2.097 5.227 4.63h.08a3.687 3.687 0 0 1 3.692 3.683a3.687 3.687 0 0 1-3.692 3.682H7.694a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.06-4.63 5.228-4.63M10 4c1.617 0 3.05.815 3.9 2.062a8 8 0 0 0-.898-.053c-2.994 0-5.171 1.677-5.937 4.213l-.068.24l-.058.238l-.206.039a4.68 4.68 0 0 0-3.449 3.045a3.282 3.282 0 0 1 1.812-5.881l.257-.006A4.72 4.72 0 0 1 10 4"/></svg>
    } else if (icon === '09d' || icon === '09n'){ 
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#C6C1C2" d="M10 3c2.465 0 3.863 1.574 4.066 3.474h.062C15.714 6.474 17 7.711 17 9.237S15.714 12 14.128 12l-.703-.001V12h-.03l-.957 1.741a.5.5 0 0 1-.876-.482l.693-1.26h-1.818V12h-.041l-.958 1.741a.5.5 0 0 1-.876-.482L9.255 12H7.396l-.958 1.741a.5.5 0 0 1-.876-.482L6.255 12h-.383C4.286 12 3 10.763 3 9.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 4.561 7.535 3 10 3M7.748 14.316a.5.5 0 0 1 .186.682l-1 1.75a.5.5 0 0 1-.868-.496l1-1.75a.5.5 0 0 1 .682-.186m3.186.682a.5.5 0 0 0-.868-.496l-1 1.75a.5.5 0 0 0 .868.496z"/></svg>
    } else if (icon === '10d' || icon === '10n'){
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#C6C1C2" d="M10.015 4.018c2.465 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763s-1.286 2.763-2.872 2.763l-.716-.001l-.01.025l-1.483 2.704a.5.5 0 0 1-.914-.396l.036-.083l1.235-2.25h-1.853l-.01.025l-1.483 2.704a.5.5 0 0 1-.914-.396l.036-.083l1.235-2.25h-1.87l-1.487 2.729a.5.5 0 0 1-.596.235l-.082-.036a.5.5 0 0 1-.236-.595l.036-.083l1.225-2.25h-.405c-1.586 0-2.872-1.236-2.872-2.762c0-1.47 1.192-2.671 2.697-2.758l.237-.005c.205-1.913 1.602-3.474 4.066-3.474"/></svg>
    } else if (icon === '11d' || icon === '11n'){
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#5b5d5a" d="M6 16a5 5 0 0 1-5-5a5 5 0 0 1 5-5c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03L19 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2V9a5 5 0 0 0-5-5C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3h1a1 1 0 0 1 1 1a1 1 0 0 1-1 1zm6-5h3l-2 4h2l-3.75 7l.75-5H9.5z"/></svg>
    } else if (icon === '13d' || icon === '13n') {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#ffffff" d="M10 2a.75.75 0 0 1 .75.75v2.19l1.47-1.47a.75.75 0 1 1 1.06 1.06l-2.53 2.53v2.19h2.19l2.53-2.53a.75.75 0 1 1 1.06 1.06l-1.47 1.47h2.19a.75.75 0 0 1 0 1.5h-2.19l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2.53-2.53h-2.19v2.19l2.53 2.53a.75.75 0 1 1-1.06 1.06l-1.47-1.47v2.19a.75.75 0 0 1-1.5 0v-2.19l-1.47 1.47a.75.75 0 0 1-1.06-1.06l2.53-2.53v-2.19H7.06l-2.53 2.53a.75.75 0 0 1-1.06-1.06l1.47-1.47H2.75a.75.75 0 0 1 0-1.5h2.19L3.47 7.78a.75.75 0 0 1 1.06-1.06l2.53 2.53h2.19V7.06L6.72 4.53a.75.75 0 0 1 1.06-1.06l1.47 1.47V2.75A.75.75 0 0 1 10 2"/></svg>
    } else {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#EFEEEC" d="M6.5 15h7a.5.5 0 0 1 .09.992L13.5 16h-7a.5.5 0 0 1-.09-.992zm-1.996-2h10.992c.278 0 .504.224.504.5c0 .245-.178.45-.413.492l-.09.008H4.503A.5.5 0 0 1 4 13.5c0-.245.178-.45.413-.492zM10 3c2.465 0 3.863 1.574 4.066 3.474h.062C15.714 6.474 17 7.711 17 9.237S15.714 12 14.128 12H5.872C4.286 12 3 10.763 3 9.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 4.561 7.535 3 10 3"/></svg>
    }
  }



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
        <Now weatherData={todayWeather}
        handleIcon={handleIcon} />
        <Hourly weatherData={nextWeather}
        handleIcon={handleIcon} />
        <Today weatherData={todayWeather} 
        UVIndex={nextWeather.daily[0].uvi}/>
        
        </>
      ) : null}
      </div>
      <div className="flex lg:w-1/4 w-full">
        {showWeather ? (
          <NextDays
          weatherData={nextWeather}
          handleIcon={handleIcon}/>
        ) : null}
     
      </div>
     
     


    </div>
  )
}

export default HomePage