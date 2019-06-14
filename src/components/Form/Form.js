import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';
import './Form.css'
import '../../../static/index.css'

export default function F(){
   // const c = a();
            return(
            <div>
            <header>
                <h1>Form to Sign Up to the Chat App </h1>
            </header>
            <form autoComplete="on" action="Submit">
                <TextField
                id="outlined-Email"
                label="Email"
                //className={c.textField}
                placeholder="Enter your email 🤗"
                margin="normal"
                variant="outlined"/>
                <TextField
                id="outlined-password"
                label="Password"
                //className={c.textField}
                placeholder="Now your Password 😁"
                margin="normal"
                variant="outlined"/>
                <Button variant="outlined" >Submit</Button>
            </form>
            </div>
        );
}