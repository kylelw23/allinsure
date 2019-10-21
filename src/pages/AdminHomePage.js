import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
class AdminHomePage extends Component {
    render() {
        const {auth} = this.props;
        if(!auth.uid){
            return <Redirect to='/'/>
        }
        return (
            <>
            <Navbar/>
            <div className="limiter-admin-login">
                <div className="container-login p-0">
                    <div className="acceptDiv m-r-50">
                        <p className="admin-history m-t-20">Accept History</p>
                    </div>
                    <div className="rejectDiv  m-l-50"> 
                        <p className="admin-history m-t-20">Reject History</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(AdminHomePage)