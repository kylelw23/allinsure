import React from 'react'
// import {useContext} from 'react';
// import {RoomContext} from '../context';

export default function ClaimsFilter() {
    return (
        <div className="manage-filter">
            <div className="filter-manage">
                <h1>Filter By</h1>
            </div>
            <div className="filter-policy">
                <h3>Policy Type</h3>
                <div>
                <h5>Type:</h5>
                <select>
                    <option value="CTP">CTP Insruance</option>
                    <option value="Comprehensive">Comprehensive Insurance</option>
                    <option value="thirdparty">Third Party Property Damage</option>
                    <option value="home">Home</option>
                 </select>
                    </div>
            </div>
            <div className="filter-Posted-Time">
                <h3>Location</h3>
                    <div>
                    <h5 className='m-t-40 m-l-30'>City:</h5>
                    <select className='m-t-10 m-l-50'>
                        <option value="CTP">Sydney</option>
                        <option value="Comprehensive">Wollongong</option>
                        <option value="thirdparty">Fairy Meadow</option>
                        <option value="home">North Wollongong</option>
                 </select>
                 
                 <h5 className='m-t-40 m-l-30'>Postcode:</h5>
                 <input className='m-t-10 m-l-50' type='text' id='postcode' placeholder="Enter your postcode" />
                    </div>
            </div>
            <div className="filter-policy m-t-250">
                <h3>Drivable</h3>
                <div>
                <h5>Drivable:</h5>
                <select>
                    <option value="CTP">Yes</option>
                    <option value="Comprehensive">No</option>
                 </select>
                    </div>
            </div>
        </div>
    )
}
