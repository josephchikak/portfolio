import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './projects.css';
import furniture from './project images/Furniture.png';
import web3 from './project images/Screenshot 2023-02-17 at 14.52.46.png';
import faceDetector from './project images/face detector.png';
import clock from './project images/clock.png';
import yacpif from './project images/yacpif.png';
import weALT from './project images/weAlt.png'




const Projects = () =>{

    return(
        <div id='projects'>
            <h2 style={{padding:'1rem'}}> PROJECTS</h2>
        <div id="project">
{/* 
        <div className='bg-white h-[500px] w-[500px] flex' >
          <div>
        <img src={web3} alt="" />

            
          </div>

        </div> */}

      <Card sx={{ maxWidth: '20rem', minHeight: "27rem", backgroundColor: 'rgb(21, 21, 21)',}} className='card' >
      <CardMedia
        component="img"
        height="140"
        image={yacpif}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="white">
          YACPIF
        </Typography>
        <p>
          A website for YACPIF foundation, created using React, tailwind, react-spring, chakra UI and redux
        </p>
      </CardContent>
      <CardActions>
       <a href='https://yacpif-1fqpzf9iq-josephchikak.vercel.app/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/yacpif" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: '20rem', minHeight: "27rem", backgroundColor: 'rgb(21, 21, 21)' }} className='card' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={weALT}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="white">
          weALT
        </Typography>
        <p>
          A landing page for weALT creative agency, built using react, tailwind and Three.js
        </p>
      </CardContent>
      <CardActions>
       <a href='https://we-alt.vercel.app/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/weALT" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>

        <Card sx={{ maxWidth: '20rem', minHeight: "27rem", backgroundColor: 'rgb(21, 21, 21)' }} className='card' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={web3}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="white">
          web3 crowdFunding site
        </Typography>
        <p>
          A web3 Crowdfundig funding app, using react js for client side, third web for handling web3 contract and peronalised by using redux for state managment.
        </p>
      </CardContent>
      <CardActions>
       <a href='https://teal-phoenix-80b9da.netlify.app/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/crowdFunding-web3" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: '20rem', minHeight: "27rem", backgroundColor: 'rgb(21, 21, 21)' }} className='card' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={furniture}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="white">
          Furniture Store
        </Typography>
        <p>
          Created a simple Ecommerce site from scratch, implementing routing, cart managment and stripe checkout.
          I used React, Tailwind CSS and some Material UI components to style my app.
        </p>
      </CardContent>
      <CardActions>
       <a href='https://josephchikak.github.io/Furniture-Ecommerce/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/Furniture-Ecommerce" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: '20rem', height: "27rem", backgroundColor: 'rgb(21, 21, 21)' }} className='card' >
      <CardMedia
        component="img"
        alt="facce detector"
        height="140"
        image={faceDetector}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color="white">
          Face Detector
        </Typography>
        <p>
          ZTM web developer course project. Here I learnt how to interact with an API and created a back end server for user sign in and sign up. Also created a database to store user data after sign up.
          Test email: test@gmail.com
          Test password: 123456
        </p>
      </CardContent>
      <CardActions>
       <a href='https://josephchikak.github.io/smart-brain-front-end-/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/smart-brain-front-end-" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>


    <Card  sx={{ maxWidth: '20rem', height: "27rem", backgroundColor: 'rgb(21, 21, 21)' }} className='card'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={clock}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Pomodoro Clock
        </Typography>
        <p>
          Created a pomodoro clock, as a study project on react state handling and working with intervals.
          Here I used some Material UI components and a CSS for styling.
        </p>
      </CardContent>
      <CardActions>
      <a href='https://josephchikak.github.io/pomodoro-clock/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/pomodoro-clock" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
       </Card>


        </div>

      </div>

    )

}

export default Projects;