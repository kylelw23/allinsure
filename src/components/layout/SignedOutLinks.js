import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
class SignedOutLinks extends Component {
    render(){
        return (
            <ul className="right">
                <li><NavLink className="log-out-btn p-r-10 p-t-9" to="/">Back ></NavLink></li>
                <li><NavLink to='/'></NavLink></li>
            </ul>
        )
    };
}
export default SignedOutLinks;