import React from "react";
import Hero from "./Hero";
import About from "./About/About";
import Projects from "./projects/Projects";
import {useState, useRef, useEffect} from 'react';
import './header.css';
import Form from "./Contact/Contact";
import Music from "./Music/Music";
import { HashLink } from 'react-router-hash-link';
import { gsap } from "gsap";
import { Html } from "@mui/icons-material";
import useWindowDimensions from "./useWindowDimensions";



const Home = ()=>{
  const contain = useRef()
    const [mobileMenu, setMobileMenu] = useState(false)

  
    const { width } = useWindowDimensions();
   
console.log(mobileMenu)

    useEffect(()=> {
   
               
        let ctx = gsap.context(() => { 
            
            gsap.from('.navs', {duration: 0.5, x:'-100%', ease: 'sine.out', stagger:0.2})
            mobileMenu ?
            gsap.from('.mobileNavigationOpen', {duration: .5, y:'-100vw', ease: 'power.out'})
            : gsap.from('.navigation',{})

        },contain)

         return () => ctx.revert();

    },[mobileMenu])

    useEffect(()=>{
        if(width > 700){
            setMobileMenu(false)
        }
           

    },[width]

    )

    return(
        <div id="app" >
        <div className='navbars'>
     <nav>
        <div className="header " ref={contain}>
            <h2 style={{paddingLeft:'1em'}}>RあY</h2>
           
            <ul className= {!mobileMenu ? 'navigation' : 'mobileNavigationOpen'}>
            <HashLink smooth to='#home'>  <li  className='navs'> home </li> </HashLink>
            <HashLink smooth to='#about'>   <li  className='navs'> about</li> </HashLink>
            <HashLink smooth to='#projects'>   <li  className='navs'>  projects </li> </HashLink>
             </ul>
              
            <ul  id={!mobileMenu ? 'contactMe' : 'contactMeMobile'} >
            <HashLink smooth to='#form'> <li className=' navs'> contact me</li> </HashLink>
             </ul>
           
        <div  className='mobileNavigation' onClick={()=>setMobileMenu(!mobileMenu)}>
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