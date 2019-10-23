import React from 'react'
import LogoImg from "../logo/logo(transparent).png";
import SignedInLinks from './layout/SignedInLinks';
import SignedOutLinks from './layout/SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const {auth} = props;
    var links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
        return (
            <nav className="admin-navigation1">
                <div className="logo-admin">
                    <img src={LogoImg} alt="Logo"/>
                </div>
               {links}
                <div id="clear"></div>
                <div className="admin-header  p-l-100">
                    <h1>Administration Team</h1>
                </div>
                <div className="nav-space"></div>
            </nav>  
        )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar);