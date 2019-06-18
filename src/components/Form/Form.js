import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';
import './Form.css'
import Grid from '@material-ui/core/Grid';
import '../../../static/index.css'

const useStyles = makeStyles(theme => ({
    textField: {
    },

  }));

export default function F(){
    const c = useStyles();
        return(
        <div>
        
            <header>
                <h1>Form to Sign Up to the Chat App </h1>
            </header>
            <Grid container spacing={3} justify="center">
            <form autoComplete="on" action="Submit">
                <Grid item xs={12}>
                <TextField
                id="outlined-Email"
                label="Email"
                //className={c.textField}
                placeholder="Enter your email 🤗"
                margin="normal"
                variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                <TextField
                id="outlined-password"
                label="Password"
                //className={c.textField}
                placeholder="Now your Password 😁"
                margin="normal"
                variant="outlined"/>
                </Grid>
                <Grid item style={{paddingTop:12}} xs={12}>
                <Button  fullWidth variant="outlined" >Submit</Button>
                </Grid>
            </form></Grid>
            </div>
             
        );
}