import firebase from '../../config/fbConfig';

export const signIn = (credentials) => {
    return (dispatch, getState) => {

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        });
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            // since the firebase auth just only have UID email and password
            // To add first name and last name with firebase auth
            // we have to create a collection Users contain fname, lname and referred uid
            return firestore.collection('users').doc(response.user.uid)
            .set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}