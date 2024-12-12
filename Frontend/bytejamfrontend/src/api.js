import axios from "axios";

const API_BASE_URL = 'http://localhost:5276';


export const getWeather = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/weatherforecast`);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

