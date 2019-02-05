export const LOGIN = 'UNLIKE_MESSAGE';


export const login = (token) => {
    return {
        type: LOGIN,
        token: token,
    }
};
