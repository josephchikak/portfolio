import React from "react";
import Hero from "./Hero";
import About from "./About/About";
import {useState} from 'react';
import './header.css';
import Form from "./Contact/Contact";
import Music from "./Music/Music";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Link} from "react-router-dom";


const Home = ()=>{

    const [mobileMenu, setMobileMenu] = useState('close')

    return(
        <div>
        <div className='navbars'>
     <nav>
        <div className="header">
            <h2 style={{paddingLeft:'1em'}}>RあY</h2>
           
            <ul className='navigation'>
                    <li> <AnchorLink href='#home' className='navs'>home</AnchorLink> </li>
                    <li> <AnchorLink href='#about' className='navs'> about</AnchorLink></li>
                    <li> <Link to='/projects' className='navs'> projects</Link> </li>
             </ul>
              
            <div  style={{display:'flex',justifyContent:'end'}}>
                <button className='navs'> contact me</button>
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
        <Music/>
        <Form/>
    </div> 
    
    )
}

export default Home;