import React, { Component } from "react";
import { Link } from 'react-router-dom';


export class Login extends Component {

    render() {
        return (
            <div>
                <Link to='/dashboard'><h2>Login</h2></Link>


            </div>
        );
    }
}


export default Login;