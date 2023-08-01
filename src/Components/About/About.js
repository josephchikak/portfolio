import React from "react";
import './about.css';
import html from './Skills Icon /104494_html5_html_icon.png';
import css from './Skills Icon /3994346_code_coding_css_html_programming_icon.png';
import js from './Skills Icon /9035061_logo_javascript_icon.png';
import react from './Skills Icon /4691292_react native_react_icon.png';
import node from './Skills Icon /9035101_logo_nodejs_icon.png';
import { Button } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const About = ()=>{
 const skills = [html,css,js,react,node];
 const names =['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODEJS'];
    return(
     
           <main id="about">
            <section className="bio">
                <article className="text-black me">
                    <h2 className='font-bold text-xl'>ABOUT</h2>
                    <p>
                        I am a web developer with a passion for building smooth, fast and beautiful web applications. I graduated university with a degree in Aerospace engineering but my love for designing, solving problems and creating art has brought me to web development. I am also a music producer that loves to experiment on sounds and create amazing listening experiences!
                     </p>
                        <br/>
                        <hr/>
                    <p>
                        <br/>
                         SKILLS <br/>
                    </p>
                    <div className="skills flex justify-between p-4">
                        {skills.map((skill,i) =>{
                        return <div className='w-24 text-center skill' key={skill}> <p>{names[i]}</p><img src={skill} alt={skill}/> </div>
                        })}
                    </div>
                    <hr/>
                    <a href="https://drive.google.com/file/d/1-HZ2BdnP4i9I6hiJL44ss_qAPJr_f-N1/view?usp=sharing" target="_blank" rel="noreferrer"><Button endIcon={<FileDownloadIcon/>} variant='outlined' sx={{marginTop:'1em', color:'black'}}> RESUME</Button> </a>


                </article>

            </section>
           </main>
   
    )

}

export default About;