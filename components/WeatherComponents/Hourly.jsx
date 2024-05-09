import React from 'react'

const Hourly = ({weatherData, handleIcon}) => {

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
        <span className="w-16 h-16 py-1">{handleIcon(weatherData.hourly[0].weather[0].icon)}</span>
        <p className="text-3xl font-bold shrink">{weatherData.hourly[0].temp.toFixed(0)}°</p>
        </div>

        <div className="flex flex-col items-center px-4 py-1 border-r-2 border-[#005187]">
        <p className="text-lg font-semibold">{handleTime(1)}</p>
        <span className="w-16 h-16 py-1">{handleIcon(weatherData.hourly[1].weather[0].icon)}</span>
        <p className="text-3xl font-bold shrink">{weatherData.hourly[1].temp.toFixed(0)}°</p>
        </div>

        <div className="flex flex-col items-center px-4 py-1 md:border-r-2 lg:border-r-2 border-[#005187]">
        <p className="text-lg font-semibold">{handleTime(2)}</p>
        <span className="w-16 h-16 py-1">{handleIcon(weatherData.hourly[2].weather[0].icon)}</span>
        <p className="text-3xl font-bold shrink">{weatherData.hourly[2].temp.toFixed(0)}°</p>
        </div>

        <div className="md:flex md:flex-col lg:flex lg:flex-col hidden items-center px-4 py-1 border-r-2 border-[#005187]">
        <p className="text-lg font-semibold">{handleTime(3)}</p>
        <span className="w-16 h-16 py-1">{handleIcon(weatherData.hourly[3].weather[0].icon)}</span>
        <p className="text-3xl font-bold shrink">{weatherData.hourly[3].temp.toFixed(0)}°</p>
        </div>

        <div className="md:flex md:flex-col lg:flex lg:flex-col hidden items-center px-4 py-1 border-r-2 border-[#005187]">
        <p className="text-lg font-semibold">{handleTime(4)}</p>
        <span className="w-16 h-16 py-1">{handleIcon(weatherData.hourly[4].weather[0].icon)}</span>
        <p className="text-3xl font-bold shrink">{weatherData.hourly[4].temp.toFixed(0)}°</p>
        </div>

        <div className="md:flex md:flex-col lg:flex lg:flex-col hidden items-center px-4 py-1">
        <p className="text-lg font-semibold">{handleTime(5)}</p>
        <span className="w-16 h-16 py-1">{handleIcon(weatherData.hourly[5].weather[0].icon)}</span>
        <p className="text-3xl font-bold">{weatherData.hourly[5].temp.toFixed(0)}°</p>
        </div>

    </div>
      </>
    ) : null }
   

  </div>
  )
}

export default Hourly