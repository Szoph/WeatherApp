import axios from 'axios'; 
import {NextResponse} from "next/server";

export async function GET(searchText) {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=${apiKey}`);
        const firstData = response.data;
        console.log(firstData);

        if (!firstData) {
            return NextResponse.error();
        }

        const lat = firstData.coord.lat;
        const lon = firstData.coord.lon;

        try {
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
            const secondData = weatherResponse.data
            console.log(secondData)
            console.log(firstData);
            return {firstData, secondData};
        } catch (error) {
            console.error(error);
            return NextResponse.error();
        }
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}