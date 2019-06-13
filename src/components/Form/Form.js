import {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import './Form.css'
import '../../../static/index.css'

const tf = makeStyles({
    textField:{
    width:'20rem',
    display:'inline-block',//css for TextField using Styled Compoenets API form material-ui
    }
});

export default class F extends Component{
    render(){
        const c = tf;
            return(
            <div>
            <header>
                <h1>Form to Sign Up to the Chat App</h1>
            </header>
            <form autoComplete="on">
                <TextField
                id="outlined-Email"
                label="Email"
                className={c.textField}
                placeholder="Enter your email 🤗"
                margin="normal"
                variant="outlined"/>
                <TextField
                id="outlined-password"
                label="Password"
                className={c.textField}
                placeholder="Now your Password 😁"
                margin="normal"
                variant="outlined"/>
            </form>
            </div>
        );
}}
