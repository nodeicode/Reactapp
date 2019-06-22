import {Component} from 'react';
import Button from '@material-ui/core/Button'
import './Form.css'
import Grid from '@material-ui/core/Grid';
import '../../../static/index.css'
//import {initf,login} from '../../../static/firebase' firebase not integrated properly yet in nextjs


export default class F extends Component{
    
    handleLogin=()=>{
        //google auth using passportJS
    }
        render(){
        return(
        <div>
            <header>
                <h1>Welcome to the Chat App <span>👨‍💻</span></h1>
            </header>
                <Button variant="outlined" 
                style={{top:'20px'}}
                 onClick={this.handleLogin}
                 >Login</Button>
            </div>);
}}