import {Component} from 'react';
import Button from '@material-ui/core/Button'
import './Form.css'
import Grid from '@material-ui/core/Grid';
import '../../../static/index.css'
//import {initf,login} from '../../../static/firebase' firebase not integrated properly yet in nextjs


export default class F extends Component{
    constructor(props){
        super(props);
        //var u = JSON.parse(req);
    }
    handleLogin=()=>{
        console.log(user)
    }
        render(){
        return(
        <div>
            <header>
                <h1>Welcome to the Chat App <span>👨‍💻</span></h1>
            </header>
                <Button variant="outlined" 
                style={{top:'20px'}}
                href="/auth/google"
                 >Login</Button>
                 <Button variant="outlined" 
                style={{top:'20px'}}
                 onClick={this.handleLogin}
                 >UserC</Button>
            </div>);
}}