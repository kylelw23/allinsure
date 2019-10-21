import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import claimReducer from './reducers/claimReducer';
import authReducer from './reducers/authReducer';
import rootReducer from './reducers/rootReducer';

const initialState ={};

const middleware = [thunk];


const store = createStore(
    rootReducer,initialState,
    compose(applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
