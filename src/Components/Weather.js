import React, { useState, useEffect } from 'react';
import './Weather.css';
import { FaSearch, FaWind } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import { WiHumidity } from 'react-icons/wi';
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { FaTemperatureLow } from "react-icons/fa";



const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState('');

    const API_KEY = "Replace with your OpenWeather API key"; 
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    // Background images based on weather type
    const getBackground = (type) => {
        const images = {
            Clear: '/backgrounds/clear.jpg',
            Clouds: '/backgrounds/clouds.jpg',
            Rain: '/backgrounds/rain.jpg',
            Snow: '/backgrounds/snow.jpg',
            Thunderstorm: '/backgrounds/storm.jpg',
            Drizzle: '/backgrounds/drizzle.jpg',
            Mist: '/backgrounds/fog.jpg',
            Default: '/backgrounds/default.jpg'
        };
        return images[type] || images['Default'];
    };

    useEffect(() => {
        if (weather?.weather) {
            document.body.style.backgroundImage = `url(${getBackground(weather.weather[0].main)})`;
        }
    }, [weather]);

    const handleOnChange = (event) => {
        setCity(event.target.value);
    };

    async function fetchData() {
        try {
            let response = await fetch(currentWeatherURL);
            let output = await response.json();
            if (response.ok) {
                setWeather(output);
                setError('');

                // Fetch forecast
                let forecastRes = await fetch(forecastURL);
                let forecastData = await forecastRes.json();
                if (forecastRes.ok) {
                    const daily = forecastData.list.filter((_, index) => index % 8 === 0);
                    setForecast(daily);
                }
            } else {
                setError('No data found. Please enter a valid city name.');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong.');
        }
    }

    return (
        <div className="container">
            <div className="city">
                <input
                    type="text"
                    value={city}
                    onChange={handleOnChange}
                    placeholder="Enter any city name"
                />
                <button onClick={fetchData}>
                    <FaSearch />
                </button>
            </div>

            {error && <p className="error-message">{error}</p>}

            {weather && weather.weather && (
                <div>
                    <div className="weather-image">
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt=""
                        />
                        <h3 className="desc">{weather.weather[0].description}</h3>
                    </div>

                    <div className="weather-temp">
                        <h2>{weather.main.temp}<span>°C</span></h2>
                    </div>

                    <div className="weather-city">
                        <MdLocationOn />
                        <p>{weather.name}, <span>{weather.sys.country}</span></p>
                    </div>

                    {/* Weather Details Cards */}
                    <div className="weather-cards">
                        <div className="card"><FaTemperatureLow /> Feels Like: {weather.main.feels_like}°C</div>
                        <div className="card"><FaWind /> Wind: {weather.wind.speed} km/h</div>
                        <div className="card"><WiHumidity /> Humidity: {weather.main.humidity}%</div>
                        <div className="card">🌫 Air Pressure: {weather.main.pressure} hPa</div>
                        <div className="card"><BsSunrise /> Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                        <div className="card"><BsSunset /> Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>

                    {/* Forecast Section */}
                    <h3 className="forecast-title">◀ Next 5 Days ▶</h3>
                    <div className="forecast">
                        {forecast.map((day, index) => (
                            <div key={index} className="forecast-card">
                                <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                                <img
                                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                    alt=""
                                />
                                <p>{day.main.temp}°C</p>
                                <p>{day.weather[0].description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
