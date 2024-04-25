import axios from 'axios'; 

export default async function handler(req, res) {
    const { city } = req.query;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching weather data", error.message);
        res.status(500).json({ error: "Error fetching weather data" });
    }
}