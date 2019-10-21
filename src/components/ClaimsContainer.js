import React, {useState, useEffect} from 'react'
import ClaimsList from './ClaimsList'
import ClaimsFilter from './ClaimsFilter';
import firebase from 'firebase/app';
import {connect, useSelector} from 'react-redux';
import {firestoreConnect, useFirebaseConnect, firebaseConnect} from 'react-redux-firebase';
import {compose} from 'redux';

export default function ClaimsContainer(){
    return(
        <>
            <ClaimsFilter/>
            <div className="manage-list">
            </div>
        </>
    );
}