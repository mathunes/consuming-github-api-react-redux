import api from '../services/api.js';

export function searchUser(text) {
    return dispatch => {
        dispatch(searchUserStarted());

        api.get(`/${text}`)
        .then(response => {
            dispatch(searchUserSuccess(response.data));
        })
        .catch(error => {
            dispatch(searchUserFailure(error.message))
        }) 
    };
};

const searchUserStarted = () => ({
    type: 'SEARCH_USER_STARTED',
})

const searchUserSuccess = data => ({
    type: 'SEARCH_USER_SUCCESS',
    userData: data,
})

const searchUserFailure = error => ({
    type: 'SEARCH_USER_FAILURE',
    payload: {
        error
    },
})