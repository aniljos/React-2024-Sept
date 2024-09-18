
const initState = {

    isAuthenticated: false,
    user: "",
    accessToken: "",
    refreshToken: ""
}

//reducer
export const authReducer = (currentState=initState, action) => {

    //return the updated state
    
    //successful login: {type: 'auth_success', payload: {}}
    if(action.type === 'auth_success'){
        return {
            isAuthenticated: action.payload.isAuthenticated,
            user: action.payload.user,
            accessToken: action.payload.accessToken,
            refreshToken: action.payload.refreshToken

        }
    }

    // unsuccessful login/logout: {type: 'auth_logout'}
    if(action.type === 'auth_logout'){
        return initState;
    }



    return currentState;

}