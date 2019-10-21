import React, { Component } from 'react';
import LogoImg from "../logo/logo(transparent).png";
import Steering from "../image/steering.jpg";
import {Link, Redirect, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';
const UserHomePage = (props) => {    
        const {auth} = props;
        if(!auth.uid){
            return <Redirect to='/'/>
        }
        return (
            <>
            <nav className="admin-navigation">
                <div className="logo-admin">
                    <img src={LogoImg} alt="Logo"/>
                </div>
                <ul>
                   <li>
                       <Link style={{color:'#529AEE'}} to="/">Insurance</Link>
                   </li>
                   <li>
                       <Link style={{color:'#529AEE'}} to="/">Claims</Link>
                   </li>
                   <li>
                       <Link style={{color:'#529AEE'}} to="/">Renewals</Link>
                   </li>
                   <li>
                       <Link style={{color:'#529AEE'}} to="/">Contact Us</Link>
                   </li>
               </ul>
               
            <ul className="right">
                <li><button  className="log-out-btn" onClick={props.signOut}>Log Out ></button></li>
                <li><NavLink to='/'></NavLink></li>
            </ul>
            </nav>
            <div className="userhomepage-container">
                <div className="userhomepageImg-container">
                <img src={Steering} alt="Logo"/>
                </div>
                <div className="insurance-detail">
                    <h1>Car insurance</h1>
                    <h5>Choose from our range of car insurance and find the cover that's right for you</h5>
                    <div className="quote-claim-btn-container">
                        <div className="getQuote-btn-container p-b-20">
                            <Link className="getQuote-btn m-t-100"to="/">Get a quote</Link>
                        </div>
                        <div className="mk-claim-btn-container">
                            <Link className="mk-claim-btn" to="/User-Login/UserHomePage/MakeClaim">Get a claim</Link>
                        </div>
                    </div>
                </div>
                <div className="lookingfor">
                </div>
                <div className="clear"></div>
                <div className="userhomepage-sm-container"></div>
            </div>
            </>
        )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage);
