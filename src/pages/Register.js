import React, { Component } from 'react'
import SignUp from '../components/auth/SignUp'
class Register extends Component {
    render(){
        return (
            <>
            <div className="limiter">
                <SignUp/>
            </div>
            </>
        )
    }
}

export default Register;
