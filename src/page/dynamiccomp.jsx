import React from "react";
import '../switcher.scss'//theme change colour of page by responding to user's selection
export default function Dynamicomm(promp){

    //set theme
    function handleClick(theme){
     
      localStorage.setItem('theme-colur',theme);
      
      window.location.reload(true);
     
    
    }
// this to view or themes when clicked according to respond retun the structural out put
return(


       
    <div className='theme-options'>
      <div id='theme-white' onClick={()=>handleClick("App theme-white")} className='active'/>
      <div id='theme-blue' onClick={()=>handleClick("App theme-blue")}
      className='active'/>
      <div id='theme-orange' onClick={()=>handleClick('App theme-orange')}
      className='active'/>
      <div id='theme-purple' onClick={()=>handleClick('App theme-purple')}
      className='active'/>
      <div id='theme-green' onClick={()=>handleClick('App theme-green')}
      className='active'/>
      <div id='theme-black' onClick={()=>handleClick('App theme-black')}
      className='active'/>
    </div>
   

    
);


}