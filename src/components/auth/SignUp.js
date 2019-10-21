import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            
            <div class="container-login">
            <div class="wrap-login1 p-l-55 p-r-55 p-t-40 p-b-">
                <form onSubmit={this.handleSubmit} class="login-form validate-form">
                    <span class="login-form-title m-b-20">
                        Sign Up
                    </span>
                    <div class="wrap-input validate-input m-b-23" data-validate="Username is required">
                        <span class="label-input">First Name</span>
                        <input class="input" 
                        type="text" 
                        id="firstname"
                        placeholder="Type your first name"
                        onChange={this.handleChange}
                        />
                        <span class="focus-input" data-symbol="&#xf206;"></span>
                    </div>
                    <div class="wrap-input validate-input m-b-23" data-validate="Username is required">
                        <span class="label-input">Last Name</span>
                        <input class="input" 
                        type="text" 
                        id="lastname"
                        placeholder="Type your last name"
                        onChange={this.handleChange}
                        />
                        <span class="focus-input" data-symbol="&#xf206;"></span>
                    </div>
                    <div class="wrap-input validate-input m-b-23" data-validate="Username is required">
                        <span class="label-input">Email</span>
                        <input class="input" 
                        type="email" 
                        id="email" 
                        placeholder="Type your email"
                        onChange={this.handleChange}
                        />
                        <span class="focus-input" data-symbol="&#xf206;"></span>
                    </div>

                    <div class="wrap-input validate-input m-b-23" data-validate="Password is required">
                        <span class="label-input">Password</span>
                        <input class="input" 
                        type="password" 
                        id="password" 
                        placeholder="Type your password"
                        onChange={this.handleChange}
                        />
                        <span class="focus-input" data-symbol="&#xf190;"></span>
                    </div>
                    <input type="checkbox" name="agree-term" id="remember-me" className="agree-term"/>
                    <label for="agree-term" class="label-agree-term"><span></span>I agree to the terms and conditions. </label>
                    
                    <div class="container-login-form-btn m-t-30">
                        <div class="wrap-login-form-btn">
                            <div class="login-form-bgbtn"></div>
                            <button class="login-form-btn" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div class="flex-col-c p-t-10 p-b-30">
                        <Link to="/user-login" class="txt2">
                            Already Have An Account?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
