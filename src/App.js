import React from 'react';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home';
import WebDev from './Components/projects/Projects';
import {
  Routes,
  Route} from "react-router-dom";

function App() {
  return (
    <div>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/projects" element={ <WebDev />} />
            <Route path='/about' element={<About/>}/>
          </Routes>
  
    </div>
  );
}

export default App;
