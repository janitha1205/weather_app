import React from 'react'
import {Link} from 'react-router-dom';
import './home.css';
export default function About(){//introductive page
   
return (
    <div className='weather-container'>
        <h1>About Us</h1>
        <Link to='/sesonal'>Seasonal weather profile</Link><br/>
        <Link to='/'>Current variation</Link>
        <p> this app is produced as a completion of first excercise with traning programe conducted by flexy-code education institute</p>
    </div>);
}
//<link to='/about' >About Us</link>
//<link to='/gallery' >Gallery</link>
 //<link to='/home' >Home</link>
