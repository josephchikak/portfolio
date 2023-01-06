import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './projects.css';
import calculator from './project images/calculator.png';
import furniture from './project images/Furniture.png';
import drum from './project images/drum machine.png';
import faceDetector from './project images/face detector.png';
import clock from './project images/clock.png';
import markdown from './project images/markdown.png';
import quote from './project images/Screenshot 2022-11-19 at 09.34.27.png';




const Projects = () =>{

    return(
        <div id='projects'>
            <h2> PROJECTS</h2>

        <div id="project">
    <Card sx={{ maxWidth: '20em', minHeight: "25rem" }} className='card'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={furniture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Furniture Store
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created a simple Ecommerce site from scratch, implementing routing, cart managment and stripe checkout
        </Typography>
      </CardContent>
      <CardActions>
       <a href='https://josephchikak.github.io/Furniture-Ecommerce/'> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/Furniture-Ecommerce"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: '20rem',minHeight: "25rem" }} className='card'>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={faceDetector}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Face Detector
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
       <a href='https://josephchikak.github.io/smart-brain-front-end-/'> <Button size="small">demo </Button> </a>
       <a href="https://github.com/josephchikak/smart-brain-front-end-"> <Button size="small">code </Button> </a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: '20rem' ,minHeight: "25rem" }} className='card'>
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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: '20rem',minHeight: "25rem" }} className='card'>
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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: '20rem',minHeight: "25rem"  }} className='card'>
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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: '20rem',minHeight: "25rem"  }} className='card'>
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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

            </div>

        </div>

    )

}

export default Projects;