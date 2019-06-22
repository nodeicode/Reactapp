import {Component} from 'react';
import Button from '@material-ui/core/Button'
import './Form.css'
import Grid from '@material-ui/core/Grid';
import '../../../static/index.css'
import '../helpers/login'



export default class F extends Component{
    
    state = {email:'',}

    handleChange=(event)=>{
        const email = event.target.value;
        this.setState({email});
    }
    handleSubmit=()=>{
        //firebase google auth
        login();
    }

        render(){
            const {email} = this.state;
        return(
        <div>
            <header>
                <h1>Form to Sign Up to the Chat App </h1>
            </header>
            <Grid container spacing={1} justify="center">
            <ValidatorForm autoComplete="on" ref="form"
            onSubmit={this.handleSubmit}
            onError={errors=>console.error(errors)}>
                <Grid item xs={12}>
                <TextValidator
                id="outlined-Email"
                label="Email"
                name="email"
                onChange={this.handleChange}
                placeholder="Enter your email 🤗"
                value={email}
                validators={['required', 'isEmail']}
                errorMessages={['This is required 😅', 'Email is not valid 😒']}
                helperText="Sign in with Google!"
                variant="outlined"/>
                </Grid>
                <Grid item style={{paddingTop:'10px'}} xs={12}>
                <Button  fullWidth variant="outlined" type="Submit" >Submit</Button>
                </Grid>
                </ValidatorForm>
            </Grid>
            </div>);
}}