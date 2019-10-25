import React,{ useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import firebase from 'firebase/app';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { Redirect} from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
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
        }else{return null;}
    })
    console.log(object);
    
    var goBack = () => {
        props.history.push('/admin-login/admin-request');
    }
    const rejected = object.rejected ? <h1>Rejected</h1> : null;
    // destructering
    const {claim} = props;
    const reject = () => {
        const firetore = getFirestore();
        firetore.collection("claim").doc(props.match.params.id).set({
            accNum: '00696562',
            alcohol: '516516516',
            authorFirstName: claim.authorFirstName,
            authorLastName: claim.authorLastName,
            bsb: '65651',
            damagedPart: 'everything',
            drivable: 'yes',
            email: claim.email,
            eventDate: claim.eventDate,
            eventDescription: claim.eventDescription,
            eventLocation: claim.eventLocation,
            eventType: claim.eventType,
            id: props.match.params.id,
            licence: claim.licence,
            licenceLength: claim.licenceLength,
            mobileNumber: claim.mobileNumber,
            rejected: true
        })
        props.history.push('/admin-login/admin-request');
    }
    const accept = () => {
        const firetore = getFirestore();
        firetore.collection("claim").doc(props.match.params.id).set({
            accNum: '56265',
            alcohol: '6516565',
            authorFirstName: claim.authorFirstName,
            authorLastName: claim.authorLastName,
            bsb: '5165165',
            damagedPart: claim.damagedPart,
            drivable: 'yes',
            email: claim.email,
            eventDate: claim.eventDate,
            eventDescription: claim.eventDescription,
            eventLocation: claim.eventLocation,
            eventType: claim.eventType,
            id: props.match.params.id,
            licence: claim.licence,
            licenceLength: claim.licenceLength,
            mobileNumber: claim.mobileNumber,
            accepted: true
        })
        props.history.push('/admin-login/admin-request');
    }
    const {auth} = props;
        if(!auth.uid){
            return <Redirect to='/'/>
        }
    if(claim){
        var status1 = claim.rejected == true ?  <h5  className="m-l-40">Rejected: YES</h5> : <h5  className="m-l-40">Status: Waitting for approval</h5>;
        var status2 = claim.accepted == true ? <h5  className="m-l-40">Accepted: NO</h5> : <h5  className="m-l-40">Status: Waitting for approval</h5>;
        
        return (
            <>
            <Navbar/>
            <div className="claim-manage" style={{height:'1300px'}}>
                
                <div style={{width:'100%',height:'50px'}}>
                        <button className="log-out-btn" onClick={goBack} style={{
                            color:'white',
                            fontSize:'24px'
                        }}>&lt; Back</button>
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
                            {status1}
                            {status2}
                        </div>
                        </div>
                    <div className="claim-detail m-t-30">
                        <div className="claim-detail-left  m-t-20 m-l-30">
                            <h2  style={{width:'300px',marginRight:'0',float:'left'}}>Event</h2>
                            {rejected}
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
                                <button  className="ask-imge m-l-120">Ask for more Images</button>
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
                        <button  className="ask-img-btn m-t-120 m-l-150">Contact this person</button>
                    </div>
                    <div className="claim-detail m-t-30" style={{height:'290px'}}>
                        <div className="claim-detail-left m-t-20 m-l-30">
                            <h2>Account Information</h2>
                        </div>
                        <div className="claim-detail-left m-t-20 m-b-6"style={{
                            backgroundColor:'#529AEE',
                            width:'100%',
                            color:'white',
                            height:'110px'
                        }}>
                            <h5 className="m-l-40 m-t-20" >BSB: {claim.bsb}</h5>
                            <h5 className="m-l-40">Account Number: {claim.accNum}</h5>
                        </div>
                        <button onClick={reject} className="log-out-btn m-b-60 m-l-80" style={{float:'left',color:"white", fontSize:'20px'}}>
                            Reject >
                        </button>
                        <button onClick={accept} className="log-out-btn m-b-60 m-r-80" style={{float:'right',color:"white", fontSize:'20px'}} >
                            Accept >
                        </button>
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
