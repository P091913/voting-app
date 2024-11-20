import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Companies from './pages/Companies';
import Teams from './pages/Teams';
import IndianHillsReps from './pages/IndianHillsReps';


import { getWeather } from './api';

function App() {

  const [weather, setWeather] = useState([]);

    useEffect(() => {
        getWeather()
            .then(data => setWeather(data))
            .catch(error => console.error(error));
    }, []);


    return (

        <div>
        
        <h1>Weather Forecast</h1>
            <ul>
                {weather.map((item, index) => (
                    <li key={index}>
                        {item.date}: {item.summary}, {item.temperatureC}°C
                    </li>
                ))}
            </ul>


        </div>
    );
}

export default App;
