import React, { Component } from "react";
import { Link } from 'react-router-dom';


export class Signup extends Component {

    render() {
        return (
            <div>
                <Link to='/login'><h2>Signup</h2></Link>


            </div>
        );
    }
}


export default Signup;