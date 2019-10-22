// this reducer will bind claim and auth reducer then pass it to create store in app.js
import authReducer from './authReducer';
import claimReducer from './claimReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer} from 'react-redux-firebase';

import 'firebase/firestore'
    // update the auth and claim reducer to rootReducer property
const rootReducer = combineReducers({
    auth: authReducer,
    claim: claimReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
export default rootReducer;