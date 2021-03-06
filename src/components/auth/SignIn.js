import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import { createHashHistory } from 'history'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
class SignIn extends Component {
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
        this.props.signIn(this.state);
    }
    render() {
        const {authError} = this.props;
        return (
            <div className="container-login">
                <div className="wrap-login p-l-55 p-r-55 p-t-40 p-b-54">
                <form 
                onSubmit={this.handleSubmit}
                className="login-form validate-form">
                            <span className="login-form-title  m-b-23">
                                Login
                            </span>
                               
                            <div className="wrap-input validate-input m-b-23" data-validate = "Username is required">
                                <span className="label-input">Username</span>
                                <input 
                                className="input" 
                                id="email"
                                type="text" 
                                name="username" 
                                placeholder="Type your username"
                                onChange={this.handleChange}/>
                                <span className="focus-input" data-symbol="&#xf206;"></span>
                            </div>

                            <div className="wrap-input validate-input" data-validate="Password is required">
                                <span className="label-input">Password</span>
                                <input 
                                className="input" 
                                type="password" 
                                id="password"
                                name="pass" 
                                placeholder="Type your password"
                                onChange={this.handleChange}/>
                                <span className="focus-input" data-symbol="&#xf190;"></span>
                            </div>
                            <div className="red-text p-l-20">
                                { authError ? <p>{authError}!!</p> : null}
                            </div>
                            <div className="text-right p-t-8 p-b-31">
                                <Link to='/'>
                                    Forgot password?
                                </Link>
                            </div>
                            
                            <div className="container-login-form-btn">
                                <div className="wrap-login-form-btn">
                                    <div className="login-form-bgbtn"></div>
                                    <button className="login-form-btn"
                                    type="submit">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div className="flex-col-c p-t-10">
                                <Link to='/Register' className="txt2">
                                    Or Create An Account
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
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
