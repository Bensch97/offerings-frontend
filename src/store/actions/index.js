import * as actionTypes from './actionTypes.js'
import axios from 'axios';


// const setAxiosDefaults = () => {
//     axios.defaults.xsrfCookieName = 'csrftoken'
//     console.log(axios.defaults.xsrfCookieName)
//     axios.defaults.xsrfHeaderName = 'X-CSRFToken'
//     console.log(axios.defaults.xsrfHeaderName)
// };
// setAxiosDefaults();


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

//removes items from localstorage
export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
} 

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}


export const authLogin = (username, password, csrfToken) => {
    
    return dispatch => {
        dispatch(authStart());
        const headers = {
            'X-CSRFToken': csrfToken
        }
        axios.post('http://127.0.0.1:8000/api-auth/login/', {
            username: username,
            password: password
        }, {
            mode: 'cors',
            headers: headers
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout(3600))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}


export const authSignup = (username, email, password, first_name, last_name) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/api-auth/login/', {
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            email: email
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout(3600))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}
// Checks State => ? logs out if there is no token : logs in 
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
