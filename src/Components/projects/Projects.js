import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './projects.css';
import furniture from './project images/Furniture.png';
import drum from './project images/drum machine.png';
import faceDetector from './project images/face detector.png';
import clock from './project images/clock.png';
import markdown from './project images/markdown.png';
import quote from './project images/Screenshot 2022-11-19 at 09.34.27.png';




const Projects = () =>{

    return(
        <div id='projects'>
            <h2 style={{padding:'1rem'}}> PROJECTS</h2>
        <div id="project">
    <Card sx={{ maxWidth: '20rem', minHeight: "27rem" }} className='card' >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={furniture}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Furniture Store
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created a simple Ecommerce site from scratch, implementing routing, cart managment and stripe checkout.
          I used React, Tailwind CSS and some Material UI components to style my app.
        </Typography>
      </CardContent>
      <CardActions>
       <a href='https://josephchikak.github.io/Furniture-Ecommerce/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/Furniture-Ecommerce" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: '20rem', height: "27rem" }} className='card' >
      <CardMedia
        component="img"
        alt="facce detector"
        height="140"
        image={faceDetector}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Face Detector
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ZTM web developer course project. Here I learnt how to interact with an API and created a back end server for user sign in and sign up. Also created a database to store user data after sign up.
          Test email: test@gmail.com
          Test password: 123456
        </Typography>
      </CardContent>
      <CardActions>
       <a href='https://josephchikak.github.io/smart-brain-front-end-/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/smart-brain-front-end-" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>
    <Card  sx={{ maxWidth: '20rem', height: "27rem" }} className='card'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={clock}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pomodoro Clock
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created a pomodoro clock, as a study project on react state handling and working with intervals.
          Here I used some Material UI components and a CSS for styling.
        </Typography>
      </CardContent>
      <CardActions>
      <a href='https://josephchikak.github.io/pomodoro-clock/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/pomodoro-clock" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>
    <Card  sx={{ maxWidth: '20rem', height: "27rem" }} className='card'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={drum}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Drum Machine
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created a drum machine as a study project for react following the given user stories. I used a mix of React, HTML and CSS. Also learnt how to use react hooks like the useEffect hook.
        </Typography>
      </CardContent>
      <CardActions>
      <a href='https://josephchikak.github.io/drum-machine/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/drum-machine" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>
    <Card  sx={{ maxWidth: '20rem', height: "27rem" }} className='card'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={quote}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quote Generator
        </Typography>
        <Typography variant="body2" color="text.secondary">
        First introduction to working with an API.
        </Typography>
      </CardContent>
      <CardActions>
      <a href='https://josephchikak.github.io/random-quote-generator/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/random-quote-generator" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: '20rem', height: "27rem" }} className='card'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={markdown}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Markdown Previewer
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Created a Markdown converter using React and CSS for styling.
        </Typography>
      </CardContent>
      <CardActions>
      <a href='https://josephchikak.github.io/markdown-previewer/' target="_blank" rel="noreferrer"> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/markdown-previewer" target="_blank" rel="noreferrer"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>

            </div>

        </div>

    )

}

export default Projects;