import './header.css'
import React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import myPhoto from './IMages/IMG_4040.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HashLink  } from "react-router-hash-link";

gsap.registerPlugin(ScrollTrigger);


function Hero (){
    const [name, setName] = useState('Joseph');

const nameChange = (name) =>{
        if (name === 'Joseph'){
            setName('RあY')
        } else{
            setName('Joseph')
        }
}
    useEffect(()=> {
        const interval = setInterval(() => nameChange(name)
          , 2000);
          return () => clearInterval(interval);
    })

    const comp = useRef();
    const tl =useRef();
    useEffect(()=> {

        let ctx = gsap.context(() => { 
            gsap.from('img', {duration: 1, x:'-80%', ease: 'power2.in', delay:0.1})
            gsap.from('.introduction', {opacity: 0, x:'50%', ease: 'back.out', stagger: 0.4, delay: 1})
            gsap.from('#music', { duration: 1, x:'-70vh', ease:'back.out', delay:1})
            gsap.from('#webdev', {duration: 1, x:'70vh', ease:'back.out', delay:1})

            tl.current =gsap.timeline({
                scrollTrigger: {
                    trigger: "#home",
                    pin: true,   
                    start: "+=300", 
                    end: "bottom bottom", 
                    scrub: 3, 
                   
                      },
                  defaults: {duration: 1}
                })

            tl.current.to('img', {duration: 1, x:'-80%', ease: 'power2.out', delay:0.1})
            tl.current.to('.introduction', {x:'50%', ease: 'back.out', stagger: 0.4})
        },comp)

         return () => ctx.revert();

    },[])


 return(
    <div ref={comp} id='home'>
    
        <section className='hero'>
        <div id='text1'>
                <h2 style={{zIndex:2}} className=' introduction'> Hi, I'm <span className='text-3xl' style={{color: 'gray'}}>{name}</span> 
                 </h2>
               
             </div>
            <div className='category animate-pulse'>
                <div id='webdev' className='icons'>
                    <HashLink smooth to='#projects'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </HashLink>
                </div>
            </div>
            <div className='intro'>
             <div id='text'>
                <p style={{zIndex:2}} className='text-base introduction'> Hi, I'm <span className='text-3xl' style={{color: 'gray'}}>{name}</span> 
                 </p>
                <p style={{zIndex:2}} className='text-base introduction'> I am a Web developer and a <br></br>Music producer.</p>
             </div>
                <img className='img' style={{maxWidth: '500px', height:'570px', position:'relative', zIndex:3, borderRadius:'1em'}} src={myPhoto} alt='me'/>
            </div>
            <div className='category animate-pulse'>
                
                <div id='music' className='icons'>
                     <HashLink smooth to='#music2'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                        </svg>
                    </HashLink>
                </div>
            </div>
         </section>
        
    </div>
 )

}

export default Hero;