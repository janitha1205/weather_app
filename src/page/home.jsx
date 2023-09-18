
import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";
import './home.css';
//first page th wether profile according to city name given by use
export default function Home(){

    const [city, setCity] = useState('');
	const [weatherInfo, setWeatherInfo] = useState(null);

	function getWeather() {//this function use to fetch api and update given locations weather profile
		 const apiKey = '69c62469d2ebf8a0dd513013ed9cf444';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				let MT = Math.round(data.main.temp);
				let FL = Math.round(data.main.feels_like);

				const weather = {
					location: `Weather in ${data.name}`,
					temperature: `Temperature: ${MT} C`,
					feelsLike: `Feels Like: ${FL} C`,
					humidity: `Humidity: ${data.main.humidity} %`,
					wind: `Wind: ${data.wind.speed} km/h`,
					condition: `Weather Condition: ${data.weather[0].description}`,
				};

				setWeatherInfo(weather);
			})

			.catch((error) => {
				console.error(error);
			}); 
	}
// structure of view on web page update way we respond 
	return (
		<div className='weather-container'>
            <h1 className="p123">Current weather profile</h1> 
            <Link to='/about'>About Us</Link><br/>
        <Link to='/sesonal'>sesonal variation</Link><br/>
			<input
				type='text'
				placeholder='Enter city name'
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<button onClick={getWeather}>Get Weather</button>
			{weatherInfo && (
				<div className='weather-info'>
					<h3>{weatherInfo.location}</h3>
					<p>{weatherInfo.temperature}</p>
					<p>{weatherInfo.feelsLike}</p>
					<p>{weatherInfo.humidity}</p>
					<p>{weatherInfo.wind}</p>
					<p>{weatherInfo.condition}</p>
				</div>
			)}

       
		</div>
	);
}