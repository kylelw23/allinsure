import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        return (
            
            <div className="container-login">
            <div className="wrap-login1 p-l-55 p-r-55 p-t-40 p-b-">
                <form onSubmit={this.handleSubmit} className="login-form validate-form">
                    <span className="login-form-title m-b-20">
                        Sign Up
                    </span>
                    <div className="wrap-input validate-input m-b-23" data-validate="Username is required">
                        <span className="label-input">First Name</span>
                        <input className="input" 
                        type="text" 
                        id="firstname"
                        placeholder="Type your first name"
                        onChange={this.handleChange}
                        />
                        <span className="focus-input" data-symbol="&#xf206;"></span>
                    </div>
                    <div className="wrap-input validate-input m-b-23" data-validate="Username is required">
                        <span className="label-input">Last Name</span>
                        <input className="input" 
                        type="text" 
                        id="lastname"
                        placeholder="Type your last name"
                        onChange={this.handleChange}
                        />
                        <span className="focus-input" data-symbol="&#xf206;"></span>
                    </div>
                    <div className="wrap-input validate-input m-b-23" data-validate="Username is required">
                        <span className="label-input">Email</span>
                        <input className="input" 
                        type="email" 
                        id="email" 
                        placeholder="Type your email"
                        onChange={this.handleChange}
                        />
                        <span className="focus-input" data-symbol="&#xf206;"></span>
                    </div>

                    <div className="wrap-input validate-input m-b-23" data-validate="Password is required">
                        <span className="label-input">Password</span>
                        <input className="input" 
                        type="password" 
                        id="password" 
                        placeholder="Type your password"
                        onChange={this.handleChange}
                        />
                        <span className="focus-input" data-symbol="&#xf190;"></span>
                    </div>
                    <input type="checkbox" name="agree-term" id="remember-me" className="agree-term"/>
                    <label htmlFor="agree-term" className="label-agree-term"><span></span>I agree to the terms and conditions. </label>
                
                    <div className="container-login-form-btn m-t-30">
                        <div className="wrap-login-form-btn">
                            <div className="login-form-bgbtn"></div>
                            <button className="login-form-btn" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div className="flex-col-c p-t-10 p-b-30">
                        <Link to="/user-login" className="txt2">
                            Already Have An Account?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)