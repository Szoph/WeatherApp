import React from 'react'


const NextDays = ({weatherData}) => {

  
 const handleDay = (key) => {
  let timestamp = weatherData.daily[key].dt
  const date = new Date(timestamp * 1000);
  const options = {weekday: 'short'};
  const weekday = date.toLocaleDateString('en-US', options);
  return weekday
 }



  return (
    <div className="bg-[#00699E] p-8 w-full h-full rounded-lg flex flex-col justify-evenly">
      <h2 className="font-bold text-lg">5-DAY FORECAST</h2>

      {weatherData && Object.keys(weatherData).length !== 0 ? (
        <>
      <div className="border-b-2 border-[#005187] flex flex-row gap-3 justify-evenly py-3 items-center">
      <h3 className="font-bold text-lg">Today</h3>
      <img className="w-12 h-12" src={`https://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}@2x.png`} alt="weather icon" />

<p className="text-lg"><span className="font-bold">{weatherData.daily[0].temp.max.toFixed(0)}° </span> / {weatherData.daily[0].temp.min.toFixed(0)}°</p>

      </div>

      <div className="border-b-2 border-[#005187] flex flex-row gap-3 justify-evenly py-3 items-center">
      <h3 className="font-bold text-lg">{handleDay(1)}</h3>
      <img className="w-12 h-12" src={`https://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}@2x.png`} alt="weather icon" />

<p className="text-lg"><span className="font-bold">{weatherData.daily[1].temp.max.toFixed(0)}° </span> / {weatherData.daily[1].temp.min.toFixed(0)}°</p>

      </div>
      <div className="border-b-2 border-[#005187] flex flex-row gap-3 justify-evenly py-3 items-center">
      <h3 className="font-bold text-lg">{handleDay(2)}</h3>
      <img className="w-12 h-12" src={`https://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}@2x.png`} alt="weather icon" />

<p className="text-lg"><span className="font-bold">{weatherData.daily[2].temp.max.toFixed(0)}° </span> / {weatherData.daily[2].temp.min.toFixed(0)}°</p>

      </div>
      <div className="border-b-2 border-[#005187] flex flex-row gap-3 justify-evenly py-3 items-center">
      <h3 className="font-bold text-lg">{handleDay(3)}</h3>
      <img className="w-12 h-12" src={`https://openweathermap.org/img/wn/${weatherData.daily[3].weather[0].icon}@2x.png`} alt="weather icon" />

<p className="text-lg"><span className="font-bold">{weatherData.daily[3].temp.max.toFixed(0)}° </span> / {weatherData.daily[3].temp.min.toFixed(0)}°</p>

      </div>
      <div className="border-b-2 border-[#005187] flex flex-row gap-3 justify-evenly py-3 items-center">
      <h3 className="font-bold text-lg">{handleDay(4)}</h3>
      <img className="w-12 h-12" src={`https://openweathermap.org/img/wn/${weatherData.daily[4].weather[0].icon}@2x.png`} alt="weather icon" />

<p className="text-lg"><span className="font-bold">{weatherData.daily[4].temp.max.toFixed(0)}° </span> / {weatherData.daily[4].temp.min.toFixed(0)}°</p>

      </div>
      <div className="border-b-2 border-[#005187] flex flex-row gap-3 justify-evenly py-3 items-center">
      <h3 className="font-bold text-lg">{handleDay(5)}</h3>
      <img className="w-12 h-12" src={`https://openweathermap.org/img/wn/${weatherData.daily[5].weather[0].icon}@2x.png`} alt="weather icon" />

<p className="text-lg"><span className="font-bold">{weatherData.daily[5].temp.max.toFixed(0)}° </span> / {weatherData.daily[5].temp.min.toFixed(0)}°</p>

      </div>

      <div className="flex flex-row gap-3 justify-evenly py-3 items-center">
      <h3 className="font-bold text-lg">{handleDay(6)}</h3>
      <img className="w-12 h-12" src={`https://openweathermap.org/img/wn/${weatherData.daily[6].weather[0].icon}@2x.png`} alt="weather icon" />

<p className="text-lg"><span className="font-bold">{weatherData.daily[6].temp.max.toFixed(0)}° </span> / {weatherData.daily[6].temp.min.toFixed(0)}°</p>

      </div>
      </>
       ) : (
        <p>Loading...</p>
       )}
     
    </div>
  )
}

export default NextDays