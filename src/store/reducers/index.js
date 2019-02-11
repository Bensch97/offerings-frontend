import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    token: null,
    error: null,
    loading: false,
    csrfToken: null,
}

const authStart = (state, action) => {
    return updatedObject(state, {
        error: null, 
        loading: true,
        csrfToken: action.csrfToken
    });
}

const authSuccess = (state, action) => {
    return updatedObject(state, {
        token: action.token,
        error: null, 
        loading: true,
    });
}

const authFail = (state, action) => {
    return updatedObject(state, {
        error: action.error, 
        loading: false
    });
}

const authLogout = (state, action) => {
    return updatedObject(state, {
        token: null
    });
} 

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}
