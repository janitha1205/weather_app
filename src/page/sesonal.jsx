import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import {CanvasJSChart} from 'canvasjs-react-charts'
import { useState, useEffect } from "react";

import axios from "axios";




// this is for according to longitude and latitude our respectable outer come has to give whether temparature veriation or humidity or wind flow speed 

export default function Sesonal(){
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [long, setLong] = useState('');
    const [lat, setLat] = useState('');
    const [data, setData] = useState('');
   



   function setprofile(){
    
	
// this is url of paticular profile api
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
    var sel = document.getElementById("profile");// selection of whether profile has to fetch relevent data store as output
	if (sel.value==1){

        axios.get(url).then((res) => setData(res.data.hourly.temperature_2m));
    }
    if(sel.value==2){
    axios.get(url).then((res) => setData(res.data.hourly.relativehumidity_2m));
    }
    if (sel.value==3){
        axios.get(url).then((res) => setData(res.data.hourly.windspeed_10m));
    }


 
	const dps=[];
	for(var i=0;i<data.length;i++){

		dps.push({x: i, y: data[i]})// convrt json into relevent formt that chart js has been manupulated to create plots

	}
	const options = {
		theme: "light2", // "light1", "dark1", "dark2" 
		animationEnabled: true,
		zoomEnabled: true,
		title: {
			text: "variation of the property"
		},
		data: [{
			type: "area",
			dataPoints: dps
		}]
		}
        const setw={va: options};
        setWeatherInfo(setw);
    }//accoring to respond the structure of output return
return (
    <div>
        
    <div className='weather-container'>
        <h1>Seasonal Variation</h1>
        <label for="profile">Choose streming data:</label>

<select name="profile" id="profile">
  <option value="1">temperature_2m</option>
  <option value="2">relativehumidity_2m</option>
  <option value="3">windspeed_10m</option>
  
</select><br/>
       
        <Link to='/about'>About Us</Link><br/>
        <Link to='/'>Current variation</Link><br/>
        
        <input
				type='decimal'
				placeholder='latitude'
				value={lat}
				onChange={(e1) => setLat(e1.target.value)}
			/><br/>
              <input
				type='decimal'
				placeholder='longitude'
				value={long}
				onChange={(e2) => setLong(e2.target.value)}
			/><br/>
			<button onClick={setprofile}>Get Weather variation</button>
    </div>
  {weatherInfo && (<CanvasJSChart options = {weatherInfo.va}/>)}
     </div>
    );
}