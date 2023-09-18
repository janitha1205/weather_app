
import { useState, useEffect } from 'react';
import './App.css';

import Home1 from "./page/home";
import About1 from "./page/about";
import Sesonal1 from "./page/sesonal";
import Dynamicomm from './page/dynamiccomp';
import { ThemeProvider } from "@material-tailwind/react";
import './switcher.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//main application controller
function App() {
//colour profile manipulater about the theme of page    
const [colorthem, setcolorthem] = useState('App');

useEffect(()=> {
    
      const curenthmecol = localStorage.getItem('theme-colur');
      
        setcolorthem(curenthmecol);
      
      },[]);
// return the page accordingly whether about or profile or seasonal variation
  return(

    
    <div className={colorthem}>
      <Dynamicomm></Dynamicomm>
      <div className='content-box'>
  <ThemeProvider>
     <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home1/>}></Route>
  <Route path='/about' element={<About1/>}></Route>
  <Route path='/sesonal' element={<Sesonal1/>}></Route>
  
  
  </Routes>
  </BrowserRouter>



  </ThemeProvider>
  
  </div>

  </div>
   );
}

export default App;
