// Initial state
let authInitialState = {
    user: null,
    token: null,
    isAuthenticated: false,

    loginLoading: false,
    loginError: null,

    registerLoading: false,
    registerError: null,
}

const AUTH_ACTIONS = {
    LOGIN_REQUEST: "auth/loginRequest",
    LOGIN_SUCCESS: "auth/loginSuccess",
    LOGIN_FAILURE: "auth/loginFailures",
    
    REGISTER_REQUEST: "auth/registerRequest",
    REGISTER_SUCCESS: "auth/registerSuccess",
    REGISTER_FAILURE: "auth/registerFailure",

    LOGOUT: "auth/logout",
};

// reducer
export function authSlice(state = authInitialState, action) {
    
    switch(action.type) {

        // Login

        case AUTH_ACTIONS.LOGIN_REQUEST:
            return {
                ...state,
                loginLoading: true,
                loginError: null
            };

        case AUTH_ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true
            };

        case AUTH_ACTIONS.LOGIN_FAILURE:
            return {
                ...state,
                loginLoading: false,
                error: action.payload,
                isAuthenticated: false
            };

        // Register 
        case AUTH_ACTIONS.REGISTER_REQUEST:
            return {
                ...state,
                registerLoading: true,
                registerError: null
            }


        case AUTH_ACTIONS.LOGOUT:
            return {
                ...authInitialState
            };

        default:
            return state;
    }
}

export const authActions = {
    loginRequest(){
        return {
            type: AUTH_ACTIONS.LOGIN_REQUEST
        }
    },

    loginSuccess(user, token){
        return {
            type: AUTH_ACTIONS.LOGIN_SUCCESS,
            payload: {
                user,
                token
            }
        }
    },

    loginFailure(error){
        return {
            type: AUTH_ACTIONS.LOGIN_FAILURE,
            payload: error
        }
    },

    registerRequest(){
        return {
            type: AUTH_ACTIONS.REGISTER_REQUEST
        }
    },

    registerSuccess(data){
        return {
            type: AUTH_ACTIONS.REGISTER_SUCCESS,
            payload: data
        }
    },

    registerFailure(error){
        return {
            type: AUTH_ACTIONS.REGISTER_FAILURE,
            payload: error.message
        }
    },

    logout(){
        return {
            type: AUTH_ACTIONS.LOGOUT
        }
    }
}