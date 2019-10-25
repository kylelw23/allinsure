import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
// import claimDetail here
// pass room into <ClaimDetail />
export default function Claim({room}) {
    console.log(room);
    // Destructering
    const { authorFirstName,
    authorLastName, eventType, eventLocation, id, licence, licenceLength} = room;

    
    return (
        <div className="claim">
                <div className="name-top p-l-20 p-t-15">
                    <p className="claim-name">{authorFirstName + ` ` + authorLastName} - Policy Number: {id}</p>
                </div>
                <div style={{
                    width:'350px',float:'left'
                }}>
                    <p className="claim-info m-l-30 m-t-5 ">Policy type: CTP Car insurance</p>
                    <p className="claim-info m-l-30">Crash type: {eventType} at {eventLocation}</p>
                    <p className="claim-info m-l-30">Licence type: {licence} / {licenceLength} Years</p>
                </div>
                <div className="container-claim-buttons" style={{
                }}>
                    <div className="claim-button-list m-r-14 m-l-20 m-b-20">
                        <Link className="log-out-btn p-t-6" style={{textDecoration:'none',color:"white", fontSize:'20px'}} to={`/admin-login/admin-request/${id}`}>
                            Detail >
                        </Link>
                    </div>
                    <div className="claim-button-list  m-r-6 m-l-20 m-b-20">
                        <button className="log-out-btn p-t-6" style={{textDecoration:'none',color:"white", fontSize:'20px'}} >
                            Accept >
                        </button>
                    </div>
                    <div className="claim-button-list  m-r-6 m-l-20 m-b-20">
                        <button className="log-out-btn p-t-6" style={{textDecoration:'none',color:"white", fontSize:'20px'}}>
                            Reject >
                        </button>
                    </div>
                </div>
                
        </div>
    )
}
Claim.propTypes = {
    claim: PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
    })
}