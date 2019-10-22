import React,{Component, useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import firebase from 'firebase/app'
import {Link} from 'react-redux-firebase';
function useTimes(){
    const [claims, setClaims] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('claim')
            .onSnapshot(
                (snapshot) => {
                    const newTimes = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setClaims(newTimes)
                })
            return () => unsubscribe();
    }, [])
    return claims
}
const ClaimDetail = (props) => {
    const claims = useTimes();
    const id = props.match.params.id;
    const object = claims.filter(item => {
        if(id === item.id){
             return item;
        }
    })
    var goBack = () => {
        props.history.push('/admin-login/admin-request');
    }
    // destructering
    const {accNum, alcohol, authorFirstName,
        authorLastName,
        bsb,
        damagedPart,
        drivable,
        email, eventDate, eventDescription, eventLocation,
        eventType, objectId, licence, licenceLength, mobileNumber} = object;

    if (typeof object !== undefined){
        return (
            <>
            <Navbar/>
            <div className="claim-manage">
                <div className="detail-back-btn p-l-25 p-t-2 m-t-40 m-l-40">
                    <button onClick={goBack} style={{
                        color:'white',
                        fontSize:'24px'
                    }}>&lt; Back</button>
                </div>
                <div className="claim-detail m-t-150 m-l-100">
                    <div className="claim-detail-left">
                        <h2>Customer: {authorFirstName} {authorLastName}</h2>
                        <h2>Age: 19 years old</h2>
                    </div>
                    <div className="claim-detail-right">
                        <h2>Policy Number: {id}</h2>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default ClaimDetail;
