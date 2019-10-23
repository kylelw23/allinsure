import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
// import claimDetail here
import ClaimDetail from '../pages/ClaimDetail';
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
                    width:'330px',float:'left'
                }}>
                    <p className="claim-info m-l-30 m-t-5 ">Policy type: CTP Car insurance</p>
                    <p className="claim-info m-l-30">Crash type: {eventDescription} at {eventLocation}</p>
                    <p className="claim-info m-l-30">Licence type: {licence} / {licenceLength} Years</p>
                </div>
                <div className="container-claim-buttons" style={{
                }}>
                    <div className="claim-button-list p-t-5 m-r-14 m-l-20">
                        <Link style={{color:"white", fontSize:'20px'}} to={`/admin-login/admin-request/${id}`}>
                            Detail >
                        </Link>
                    </div>
                    <div className="claim-button-list p-t-5 m-r-6 m-l-20 m-b-20">
                        <Link style={{color:"white", fontSize:'20px'}} >
                            Accept >
                        </Link>
                    </div>
                    <div className="claim-button-list p-t-5 m-r-6 m-l-20 m-b-20">
                        <Link style={{color:"white", fontSize:'20px'}}>
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