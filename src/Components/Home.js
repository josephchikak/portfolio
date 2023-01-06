import React from "react";
import Hero from "./Hero";
import About from "./About/About";
import Projects from "./projects/Projects";
import {useState} from 'react';
import './header.css';
import Form from "./Contact/Contact";
import Music from "./Music/Music";
import { HashLink } from 'react-router-hash-link';


const Home = ()=>{

    const [mobileMenu, setMobileMenu] = useState('close')

    return(
        <div id="app">
        <div className='navbars'>
     <nav>
        <div className="header">
            <h2 style={{paddingLeft:'1em'}}>RあY</h2>
           
            <ul className='navigation'>
            <HashLink smooth to='#home'>  <li  className='navs'> home </li> </HashLink>
            <HashLink smooth to='#about'>   <li  className='navs'> about</li> </HashLink>
            <HashLink smooth to='#projects'>   <li  className='navs'>  projects </li> </HashLink>
             </ul>
              
            <div  style={{display:'flex',justifyContent:'end'}}>
            <HashLink smooth to='#form'> <button className='navs'> contact me</button> </HashLink>
             </div>
           
        <div className='mobileNavigation' onClick={()=> mobileMenu === 'close' ? setMobileMenu('open') : setMobileMenu('close') }>
                <div className='mobileNav'></div>
                <div className='mobileNav'></div>
                <div className='mobileNav'></div>
         </div>          
            </div>
       </nav>
     </div>
        <Hero/>
        <About/>
        <Projects/>
        <Music/>
        <Form/>
    </div> 
    )
}

export default Home;