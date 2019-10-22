import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import ClaimsContainer from '../components/ClaimsContainer'
export default class AdminRequestPage extends Component {
    render() {
        return (
            <>
            <div style={{
                backgroundColor:'#F2F1F1',
                height:'2000px'
            }}>
                <Navbar/>
                <div className="claim-manage">
                    <div className="manage-container">
                            <ClaimsContainer/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
