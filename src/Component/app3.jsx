
import React,{Component} from 'react';
import { useState, useEffect } from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'
import axios from "axios";

// seasonal effect graph generator

const App3 = (long,lat)=> {
	// api fetch the data
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
	const [data, setData] = useState(null);

	const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data.hourly.temperature_2m));
      };
    
      useEffect(() => {
        fetchInfo();
      }, []); 
 
	const dps=[];
	for(var i=0;i<100;i++){
		//change json into format where required by chartjs to generate a plot
		dps.push({x: i, y: data[i]})
	}
// theme

	const options = {
		theme: "light2", // "light1", "dark1", "dark2"
		animationEnabled: true,
		zoomEnabled: true,
		title: {
			text: "Try Zooming and Panning"
		},
		data: [{
			type: "area",
			dataPoints: dps
		}]
		}
//generate output	
		return (<div>
			<CanvasJSChart options = {options}/>	
					</div>
		);
		}

export default App3;
                       