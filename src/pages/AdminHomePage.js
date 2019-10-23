import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import { Redirect} from 'react-router-dom';
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
            <div className="limiter-admin-login p-0">
                <div className="container-login m-0">
                    <div className="acceptDiv m-r-50">
                        <p className="admin-history m-t-20">Accept History</p>
                        <div className="admin-history-th">
                            <h4 className="m-t-20 m-l-20 m-r-20">Claim ID</h4>
                            <h4 className="m-t-20 m-l-120 m-r-40">By Admin</h4>
                            <h4 className="m-t-20 m-l-100 m-r-20">Time</h4>
                        </div>
                    </div>
                    <div className="rejectDiv  m-l-50"> 
                        <p className="admin-history m-t-20">Reject History</p>
                        <div className="admin-history-th">
                            <h4 className="m-t-20 m-l-20 m-r-20">Claim ID</h4>
                            <h4 className="m-t-20 m-l-120 m-r-40">By Admin</h4>
                            <h4 className="m-t-20 m-l-100 m-r-20">Time</h4>
                        </div>
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