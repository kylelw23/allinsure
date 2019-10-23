import React from 'react'
import { Redirect} from 'react-router-dom';
import LogoImg from "../logo/logo(transparent).png";
import {connect} from 'react-redux';
import { signOut } from '../store/actions/authActions';

function MakeClaimSuccess(props) {
    const {auth} = props;
        if(!auth.uid){
            return <Redirect to='/'/>
        }
    return (
        <>
        <nav className="admin-navigation1">
                <div className="logo-admin">
                    <img src={LogoImg} alt="Logo"/>
                </div>
                <ul>
               </ul>
                <div id="clear"></div>
                <div className="admin-header p-l-100">
                    <h1>Claim an insurance</h1>
                </div>
                <div className="nav-space"></div>
        </nav>
        <div className="page-not-found4" style={{
            height:'800px'
        }}>
            <div className="page-not-found2 m-t-10">
                <h2>Congratulation! Your claims form has been successfully lodged into our system!</h2>
                <h4 className="m-t-10">Our agency will contact you as soon as possible after accepting your claim</h4>
            <div className="page-not-found3 m-t-30">
            <button className="page-not-found-btn" onClick={props.signOut}>Our Home Page</button>
            </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(MakeClaimSuccess);