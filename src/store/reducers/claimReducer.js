const initState = {
    claim: [
        
    ]
}

const claimReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_CLAIM':
            console.log('created claim', action.claim);
            return state;
        case 'CREATE_CLAIM_ERROR':
            console.log('Create project error', action.err);
            return state;
        case 'REJECT_CLAIM':
            console.log('Create project error', action.err);
            return state;
        case 'REJECT_CLAIM_ERROR':
            console.log('Create project error', action.err);
            return state;
        default: 
            return state;
    }
} 


export default claimReducer