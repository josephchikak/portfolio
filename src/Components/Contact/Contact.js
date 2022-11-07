import React from "react";
import './contact.css';
import { FormControl, Input, TextField } from '@mui/material';

const Form = () =>{
    return(
        <div className="form" >
            <h2>shoot!</h2>
        <div className="contact" >
            <FormControl>
            <Input label="Name" placeholder="Name" color="primary" margin="normal" focused />
            <Input label="Email" color="primary" placeholder="Email"  focused />
            <TextField label='Message' multiline='Default Value' margin="normal"/>


            </FormControl>

        </div>
        </div>
    )
}

export default Form;