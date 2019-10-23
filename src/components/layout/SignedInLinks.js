import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import {Link} from 'react-router-dom';
const SignedInLinks = (props) => {
        return (
            <>
            <ul>
            <li>
                <Link to="/admin-login/admin-home-page" style={{textDecoration:'none'}}>Home</Link>
            </li>
            <li>
                <Link to="/admin-login/admin-request" style={{textDecoration:'none'}}>Request</Link>
            </li>
            </ul>
            <ul className="right">
                <li><button  className="log-out-btn" onClick={props.signOut}>Log Out ></button></li>
                <li><NavLink to='/'></NavLink></li>
            </ul>
            </>
        )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);