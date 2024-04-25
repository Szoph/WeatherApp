import React from 'react'

const Today = ({weatherData, UVIndex}) => {

  let sunriseTemp, sunsetTemp, windSpeedMph

  if (weatherData.name !== undefined) {
    const sunriseTimestamp = weatherData.sys.sunrise * 1000;
    const sunriseDate = new Date(sunriseTimestamp);
    sunriseTemp = sunriseDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false});
  
    const sunsetTimestamp = weatherData.sys.sunset * 1000;
    const sunsetDate = new Date(sunsetTimestamp);
    sunsetTemp = sunsetDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false});
  
    const windSpeedMps = weatherData.wind.speed;
    windSpeedMph = windSpeedMps * 2.237;
  }

 
  return (
    <div className="bg-[#00699E] rounded-lg p-8">
      {weatherData ? (
        <>
         <h2 className="text-xl font-bold pb-3">Today's Forecast</h2>
         <div className="flex md:flex-col lg:flex-col flex-row gap-3 w-full justify-around">
      <div className="flex md:flex-row lg:flex-row flex-col justify-between pb-2">
        <div className="flex flex-col pb-3">
      <span className="flex flex-row gap-2 justify-center items-center">
      <svg className="shrink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sunrise"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>
        <p className="font-semibold md:text-lg lg:text-lg text-sm">Sunrise</p>
      </span>
      <p className="md:text-xl lg:text-xl text-lg font-bold text-center">{sunriseTemp}</p>
      
      </div>

      <div className="flex flex-col pb-3">
        <span className="flex flex-row gap-2 justify-center items-center">
        <svg className="shrink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sunset"><path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 6-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>
      <p className="font-semibold md:text-lg lg:text-lg text-sm">Sunset</p>
    </span>
    <p className="md:text-xl lg:text-xl text-lg font-bold text-center">{sunsetTemp}</p>
      </div>

      <div className="flex flex-col pb-3">
        <span className="flex flex-row gap-2 justify-center items-center">
        <svg className="shrink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thermometer"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>
      <p className="font-semibold md:text-lg lg:text-lg text-sm">Feels Like</p>
      </span>
      <p className="md:text-xl lg:text-xl text-lg font-bold text-center">{weatherData.main.feels_like.toFixed(0)}°C</p>
      </div>

      </div>


      <div className="flex md:flex-row lg:flex-row flex-col justify-between">
        <div className="flex flex-col pb-3">
          <span className="flex flex-row gap-2 justify-center items-center">
          <svg className="shrink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wind"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>
      <p className="font-semibold md:text-lg lg:text-lg text-sm">Wind</p>
      </span>
      <p className="md:text-xl lg:text-xl text-lg font-bold text-center">{windSpeedMph.toFixed(0)}mph</p>
      </div>

      <div className="flex flex-col pb-3">
        <span className="flex flex-row gap-2 justify-center items-center">
        <svg className="shrink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplet"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
      <p className="font-semibold md:text-lg lg:text-lg text-sm">Humidity</p>
      </span>
      <p className="md:text-xl lg:text-xl text-lg font-bold text-center">{weatherData.main.humidity}%</p>
      </div>

      <div className="flex flex-col pb-3">
        <span className="flex flex-row gap-2 justify-center items-center">
        <svg className="shrink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
      <p className="font-semibold md:text-lg lg:text-lg text-sm">UV Index</p>
      </span>
      <p className="md:text-xl lg:text-xl text-lg font-bold text-center">{UVIndex.toFixed(0)}</p>
      </div>
      </div>
      </div>
        </>
      ) : null }
     

    </div>
  )
}

export default Today