import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export const getWeatherByCity = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await axios.get(url);
        return response.data;
    
    } catch (error) {
        throw error;
    }
}; 


export const getWeatherByCoords = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,alerts&appid=${apiKey}`; 
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) { 
        throw error;
    }
}