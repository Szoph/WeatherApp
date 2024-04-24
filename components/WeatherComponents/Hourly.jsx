import React from 'react'

const Hourly = ({weatherData}) => {

    const handleTime = (key) => {
      let timestamp = weatherData.hourly[key].dt
      const date = new Date(timestamp * 1000);
      const options = {hour: '2-digit', minute: '2-digit', hour12: false};
      const time = date.toLocaleTimeString('en-US', options);
      return time
    }
  return (
    <div className="bg-[#00699E] rounded-lg p-8 mb-3">
    {weatherData ? (
      <>
       <h2 className="text-xl font-bold pb-3">Hourly Forecast</h2>
   <div className="w-full flex flex-row justify-evenly">
    <div className="flex flex-col items-center px-4 py-1 border-r-2 border-[#005187]">
        <p className="text-lg font-semibold">{handleTime(0)}</p>
        <img className="md:w-20 md:h-20 lg:w-20 lg:h-20 w-16 h-16" src={`https://openweathermap.org/img/wn/${weatherData.hourly[0].weather[0].icon}@2x.png`} alt="weather icon" />
        <p className="text-3xl font-bold shrink">{weatherData.hourly[0].temp.toFixed(0)}°</p>
        </div>

        <div className="flex flex-col items-center px-4 py-1 border-r-2 border-[#005187]">
        <p className="text-lg font-semibold">{handleTime(1)}</p>
        <img className="md:w-20 md:h-20 lg:w-20 lg:h-20 w-16 h-16" src={`https://openweathermap.org/img/wn/${weatherData.hourly[1].weather[0].icon}@2x.png`} alt="weather icon" />
        <p className="text-3xl font-bold shrink">{weatherData.hourly[1].temp.toFixed(0)}°</p>
        </div>

        <div className="flex flex-col items-center px-4 py-1 md:border-r-2 lg:border-r-2 border-[#005187]">
        <p className="text-lg font-semibold">{handleTime(2)}</p>
        <img className="md:w-20 md:h-20 lg:w-20 lg:h-20 w-16 h-16" src={`https://openweathermap.org/img/wn/${weatherData.hourly[2].weather[0].icon}@2x.png`} alt="weather icon" />
        <p className="text-3xl font-bold shrink">{weatherData.hourly[2].temp.toFixed(0)}°</p>
        </div>

        <div className="md:flex md:flex-col lg:flex lg:flex-col hidden items-center px-4 py-1 border-r-2 border-[#005187]">
        <p className="text-lg font-semibold">{handleTime(3)}</p>
        <img className="w-20 h-20" src={`https://openweathermap.org/img/wn/${weatherData.hourly[3].weather[0].icon}@2x.png`} alt="weather icon" />
        <p className="text-3xl font-bold shrink">{weatherData.hourly[3].temp.toFixed(0)}°</p>
        </div>

        <div className="md:flex md:flex-col lg:flex lg:flex-col hidden items-center px-4 py-1 border-r-2 border-[#005187]">
        <p className="text-lg font-semibold">{handleTime(4)}</p>
        <img className="w-20 h-20" src={`https://openweathermap.org/img/wn/${weatherData.hourly[4].weather[0].icon}@2x.png`} alt="weather icon" />
        <p className="text-3xl font-bold shrink">{weatherData.hourly[4].temp.toFixed(0)}°</p>
        </div>

        <div className="md:flex md:flex-col lg:flex lg:flex-col hidden items-center px-4 py-1">
        <p className="text-lg font-semibold">{handleTime(5)}</p>
        <img className="w-20 h-20" src={`https://openweathermap.org/img/wn/${weatherData.hourly[5].weather[0].icon}@2x.png`} alt="weather icon" />
        <p className="text-3xl font-bold">{weatherData.hourly[5].temp.toFixed(0)}°</p>
        </div>

    </div>
      </>
    ) : null }
   

  </div>
  )
}

export default Hourly