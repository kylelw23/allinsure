import React, {Component} from 'react'
import ClaimsList from './ClaimsList'
import ClaimsFilter from './ClaimsFilter';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';

class ClaimsContainer extends Component{
    render(){
        return(
        <>
            <ClaimsFilter/>
            <div className="manage-list">
            <ClaimsList/>
            </div>
        </>
    );
    }
    
}

const mapStateToProps = (state) => {
    return{
        claims: state.firestore.ordered
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'claim' }
    ])
)(ClaimsContainer)