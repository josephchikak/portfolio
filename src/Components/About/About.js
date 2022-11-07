import React from "react";
import './about.css';
import html from './Skills Icon /104494_html5_html_icon.png';
import css from './Skills Icon /3994346_code_coding_css_html_programming_icon.png';
import js from './Skills Icon /9035061_logo_javascript_icon.png';
import react from './Skills Icon /4691292_react native_react_icon.png';
import node from './Skills Icon /9035101_logo_nodejs_icon.png';


const About = ()=>{
 const skills = [html,css,js,react,node];
 const names =['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODEJS'];
    return(
        <div className="abt"> 
           <main id="about">
            <section className="bio">
                <article className="text-white">
                    <h2 className='font-bold text-xl'>ABOUT</h2>
                    <p>I am a self thought web developer, I focus on building smooth and beautiful web-end applications. I graduated university with a degree in Aerospace engineering. I am also a music producer.
                       I love creating and desigining art and solving problems. </p>
                       <br/>
                       <hr/>
                    <p>
                        <br/>
                        <br/>
                         SKILLS <br/>
                    </p>

                    <div className="flex justify-between p-4">
                        {skills.map((skill,i) =>{
                        return <div className='w-24 text-center' key={skill}> <p>{names[i]}</p><img src={skill} alt={skill}/> </div>
                        })}
                    </div>
                </article>

            </section>
           </main>
        </div>
    )

}

export default About;