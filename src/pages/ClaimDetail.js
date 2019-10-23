import React,{Component, useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import firebase from 'firebase/app';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link, Redirect} from 'react-redux-firebase';
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
    console.log(props);
    // destructering
    const {claim} = props;
    
    const {auth} = props;
        if(!auth.uid){
            return <Redirect to='/'/>
        }
    if(claim){
        return (
            <>
            <Navbar/>
            <div className="claim-manage" style={{height:'1300px'}}>
                
                <div style={{width:'100%',height:'50px'}}>
                    <div className="detail-back-btn p-l-20 p-t-4">
                        <button onClick={goBack} style={{
                            color:'white',
                            fontSize:'24px'
                        }}>&lt; Back</button>
                    </div>
                </div>
                <div className="clear"/>
                <div className="m-t-70 m-r-0" style={{float:'left',
                width:'60%', height:'500px'
                }}>
                    <div className="claim-detail">
                        <div className="claim-detail-left m-t-20 m-l-30">
                            <h2>Policy</h2>
                        </div>
                        <div className="claim-detail-left m-t-20"
                        style={{
                            backgroundColor:'#529AEE',
                            width:'100%',
                            color:'white',
                            height:'164px',
                            borderRadius:'0 0 5px 5px'
                        }}>
                            <h5 className="m-l-40 m-t-20">Number: {id}</h5>
                            <h5  className="m-l-40">Type: CTP car insurance</h5>
                            <h5  className="m-l-40">Status: Waiting for claim request approval</h5>
                        </div>
                        </div>
                    <div className="claim-detail m-t-30">
                        <div className="claim-detail-left  m-t-20 m-l-30">
                            <h2  style={{width:'300px',marginRight:'0',float:'left'}}>Event</h2>
                        </div>
                        <div className="claim-detail-left m-t-20"
                        style={{
                            backgroundColor:'#529AEE',
                            width:'100%',
                            color:'white',
                            height:'164px',
                            borderRadius:'0 0 5px 5px'
                        }}>
                            <div style={{
                                width:'50%',float:'left'
                            }}>
                                <h5  style={{width:'400px'}} className="m-l-40 m-t-20">Event Type: {claim.eventType}</h5>
                                <h5  style={{width:'400px'}} className="m-l-40">Event Location: {claim.eventLocation}</h5>
                                <h5  style={{width:'400px'}} className="m-l-40">Event Date: {claim.eventDate}</h5>
                                <h5  style={{width:'400px'}} className="m-l-40">Event Description: {claim.eventDescription}</h5>
                            </div>
                            <div style={{
                                width:'50%',float:'right'
                            }}>
                                <button  className="ask-img-btn m-t-80 m-l-120">Ask for more Images</button>
                            </div>
                        </div>
                    </div>
                    <div className="claim-detail m-t-30">
                        <div className="claim-detail-left m-t-20 m-l-30">
                            <h2>Additional Information</h2>
                        </div>
                        <div className="claim-detail-left m-t-20"
                        style={{
                            backgroundColor:'#529AEE',
                            width:'100%',
                            color:'white',
                            height:'164px',
                            borderRadius:'0 0 5px 5px'
                        }}>
                            <h5 className="m-l-40 m-t-20">Drivable: {claim.driveble}</h5>
                            <h5  className="m-l-40">Damaged Part: {claim.damagedPart}</h5>
                            <h5  className="m-l-40">Alcohol: {claim.alcohol}</h5>
                        </div>
                    </div>
                    </div>
                <div className="m-t-70" style={{float:'right',
                display:'block',
                marginLeft:'40px',
                height:'1000px',
                width:'37%'
                }}>
                    <div className="claim-detail" style={{height:'350px'}}>
                        <div className="claim-detail-left m-t-20 m-l-30">
                            <h2>Contact Information</h2>
                        </div>
                        <div className="claim-detail-left m-t-20 m-b-24"style={{
                            backgroundColor:'#529AEE',
                            width:'100%',
                            color:'white',
                            height:'163px'
                        }}>
                            <h5 className="m-l-40 m-t-20" >Name: {claim.authorFirstName+ ` ` + claim.authorLastName}</h5>
                            <h5 className="m-l-40">At: 55 Jardine Street, Fairy Meadow</h5>
                            <h5 className="m-l-40">Mobile Number: +64 {claim.mobileNumber}</h5>
                            <h5 className="m-l-40">Email: {claim.email}</h5>
                        </div>
                        <button  className="ask-img-btn m-t-120 m-l-130">Contact this person</button>
                    </div>
                    <div className="claim-detail m-t-30" style={{height:'290px'}}>
                        <div className="claim-detail-left m-t-20 m-l-30">
                            <h2>Account Information</h2>
                        </div>
                        <div className="claim-detail-left m-t-20 m-b-24"style={{
                            backgroundColor:'#529AEE',
                            width:'100%',
                            color:'white',
                            height:'110px'
                        }}>
                            <h5 className="m-l-40 m-t-20" >BSB: {claim.bsb}</h5>
                            <h5 className="m-l-40">Account Number: {claim.accNum}</h5>
                        </div>
                        <div className="claim-button-list p-t-5 m-r-90 m-l-60">
                        <button style={{color:"white", fontSize:'20px'}}>
                            Reject >
                        </button>
                    </div>
                    <div className="claim-button-list p-t-5 m-r-6 m-l-20 m-b-20">
                        <button style={{color:"white", fontSize:'20px'}} >
                            Accept >
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const claims = state.firestore.data.claim;
    const claim = claims ? claims[id] : null
    return {
        auth: state.firebase.auth,
        claim: claim
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'claim' }
    ])
)(ClaimDetail);
