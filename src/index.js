import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {Provider } from 'react-redux';
import firebase from 'firebase/app';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider , getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import 'firebase/firestore'
const rrfConfig = { userProfile: 'users',
useFirestoreForProfile: true }
// applyMiddleware return store enhancer
// we will combine several store enhancer together
const store = createStore(rootReducer, 
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig, {attachAuthIsReady: true}),
    )
);
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }
        ReactDOM.render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <Router>
                        <App />
                    </Router>
                </ReactReduxFirebaseProvider>
            </Provider>
        , document.getElementById('root'));


serviceWorker.unregister();
