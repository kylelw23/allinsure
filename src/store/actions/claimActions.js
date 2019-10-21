// mapDispatchToProps from MakeClaim.js
export const createClaim = (claim) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asycn call to database
        const firestore = getFirestore();
        //return a promise
        firestore.collection('claim').add({
            ...claim,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
        }).then(() => {
            dispatch({type: 'CREATE_CLAIM', claim});
        }).catch((err) => {
            dispatch({type: 'CREATE_CLAIM_ERROR', err});
        })
    }
};