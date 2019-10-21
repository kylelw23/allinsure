import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import ClaimsContainer from '../components/ClaimsContainer'
export default class AdminRequestPage extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className="claim-manage">
                <div className="manage-container">
                        <ClaimsContainer/>
                </div>
            </div>
            </>
        )
    }
}
