import React, { useRef } from "react";
import './contact.css';
import {Button, Input, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';


const Form = () =>{


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID , form.current, process.env.REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
              alert('Thank you for contacting me, I will respond to your message as soon as I can')
          }, (error) => {
              console.log(error.text);
          });
      };
    

    return(
        <div id="form" >
            <h2>SHOOT!</h2>
        <form className="contact"  ref={form} onSubmit={sendEmail}>
            <Input label="Name" placeholder="Name" color="primary" margin="normal" name="user_name"/>
            <Input label="Email" color="primary" placeholder="Email"  name="user_email"/>
            <TextField sx={{width: 'fitContent',}} label='Message' multiline={true} margin="normal" name="message"/>
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                Send
                </Button>
        </form>

        <div id="contactInfo">
            <p>email: josephchikak@gmail.com</p>
        </div>
        </div>
    )
}

export default Form;