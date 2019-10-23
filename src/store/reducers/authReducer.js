const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
        console.log('login error');    
        return {
                ...state,
                authError: 'Login failed, wrong Email or Password'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup successfully');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Signup fail');
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
} 


export default authReducer