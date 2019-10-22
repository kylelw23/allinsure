import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
// import claimDetail here
// pass room into <ClaimDetail />
export default function Claim({room}) {
    console.log(room);
    // Destructering
    const {slug, type,
    accNum, alcohol, authorFirstName,
    authorLastName,
    bsb,
    damagedPart,
    drivable,
    email, eventDate, eventDescription, eventLocation,
    eventType, id, licence, licenceLength, mobileNumber} = room;
    return (
        <div className="claim">
                <div className="name-top p-l-20 p-t-15">
                    <p className="claim-name">{authorFirstName + ` ` + authorLastName} - Policy Number: {id}</p>
                </div>
                <div style={{
                    width:'400px',float:'left'
                }}>
                    <p className="claim-info m-l-30 m-t-5 ">Policy type: CTP Car insurance</p>
                    <p className="claim-info m-l-40">Crash type: {eventDescription} at {eventLocation}</p>
                    <p className="claim-info m-l-40">Licence type: {licence} / {licenceLength} Years</p>
                </div>
                <div className="container-claim-buttons" style={{
                }}>
                    <div className="claim-button-list p-t-5 m-r-20 m-l-20">
                        <Link style={{color:"white", fontSize:'20px'}} to={`/claims/${id}`}>
                            Detail >
                        </Link>
                    </div>
                    <div className="claim-button-list p-t-5 m-r-20 m-l-20 m-b-20">
                        <Link style={{color:"white", fontSize:'20px'}} to={`/claims/${id}`}>
                            Accept >
                        </Link>
                    </div>
                    <div className="claim-button-list p-t-5 m-r-20 m-l-20 m-b-20">
                        <Link style={{color:"white", fontSize:'20px'}} to={`/claims/${id}`}>
                            Reject >
                        </Link>
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