// mapDispatchToProps from MakeClaim.js
export const createClaim = (claim) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asycn call to database
        const firestore = getFirestore();
        const authorFirstname = getState().firebase.profile.firstName;
        const authorLastName = getState().firebase.profile.lastName;
        console.log(getState().firebase.profile);
        //return a promise
        firestore.collection('claim').add({
            ...claim,
            authorFirstName: authorFirstname,
            authorLastName: authorLastName,
        }).then(() => {
            dispatch({type: 'CREATE_CLAIM', claim});
        }).catch((err) => {
            dispatch({type: 'CREATE_CLAIM_ERROR', err});
        })
    }
};

// export const rejectClaim = (claim) => {
//     (dispatch, { getFirestore }) => {
//         const firestore = getFirestore();

//         firestore.collection('claim').doc(claim.id).update({
//             rejected: 'yes',
//         }).then(() => {
//             dispatch({type: 'REJECT_CAIM', claim});
//         }).catch((err) => {
//             dispatch({type: 'REJECT_CLAIM_ERROR', err});
//         })
//     }
// }