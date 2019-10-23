import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import ClaimsContainer from '../components/ClaimsContainer'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
class AdminRequestPage extends Component {
    render() {
        const {auth} = this.props;
        if(!auth.uid){
            return <Redirect to='/'/>
        }
        return (
            <>
                <Navbar/>
                <div className="claim-manage">
                    <div className="manage-container">
                            <ClaimsContainer/>
                    </div>
                </div>=
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
export default connect(mapStateToProps)(AdminRequestPage)
