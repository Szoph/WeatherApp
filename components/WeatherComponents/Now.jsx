import React from 'react'

const Now = ({weatherData}) => {

  const handleIcon = (icon) => {
    
  }

 return (
    <div className="flex md:flex-row lg:flex-row flex-col justify-between w-full p-4 pt-8">
      {weatherData && Object.keys(weatherData).length !== 0  ? (
        <>
        <div className="flex flex-col gap-4">
        <h2 className="md:text-6xl lg:text-6xl text-3xl font-semibold">{weatherData.name}</h2>
        <p className="md:text-xl lg:text-xl text-md ">{weatherData.weather[0].description}</p>
        <img className="md:hidden lg:hidden w-32 h-32 flex self-center" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" />
        
        <h3 className="md:text-8xl lg:text-8xl text-6xl py-6 font-bold text-center">{weatherData.main.temp.toFixed(0)}°</h3>
        </div>
        
        <div className="flex justify-center items-center w-1/2">
       <img className="md:flex lg:flex hidden w-44 h-44" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" />
  
        </div> 
        </> ) : null
      }
      
    </div>
  )
}

export default Now