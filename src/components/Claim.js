import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
// import claimDetail here
// pass room into <ClaimDetail />
export default function Claim({room}) {
    // Destructering
    const{type, slug} = room;
    return (
        <div className="claim">
                <div className="name-top p-l-20 p-t-15">
                    <p className="claim-name">Bui Dang Khoa - Policy Number: 1213216456</p>
                </div>
                <p className="claim-info m-l-30 m-t-5 ">Policy type: {type}</p>
                <p className="claim-info m-l-40">Crash type: {type}</p>
                <div className="claim-button-list p-t-5 m-r-20 m-l-20 m-b-20">
                    <Link to={`/rooms/${slug}`}>
                        Detail
                    </Link>
                </div>
                <div className="claim-button-list p-t-5 m-r-20 m-l-20 m-b-20">
                    <Link to={`/rooms/${slug}`}>
                        Accept
                    </Link>
                </div>
                <div className="claim-button-list p-t-5 m-r-20 m-l-20 m-b-20">
                    <Link to={`/rooms/${slug}`}>
                        Reject
                    </Link>
                </div>
        </div>
    )
}
Claim.propTypes = {
    claim: PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}