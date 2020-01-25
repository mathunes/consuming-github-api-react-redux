import api from '../services/api.js';

function searchRepos(dataUser) {
    return dispatch => {

        api.get(`/${dataUser.login}/repos`)
        .then(response => {
            dispatch(searchUserSuccess(dataUser, response.data));
        })
    }
}

export function searchUser(text) {
    return dispatch => {
        dispatch(searchUserStarted());
        
        api.get(`/${text}`)
        .then(response => {
            // dispatch(searchUserSuccess(response.data));
            dispatch(searchRepos(response.data));;
        })
        .catch(error => {
            dispatch(searchUserFailure(error.message));
        }) 
    };
};

const searchUserStarted = () => ({
    type: 'SEARCH_USER_STARTED',
})

const searchUserSuccess = (dataUser, dataRepos) => ({
    type: 'SEARCH_USER_SUCCESS',
    userData: {...dataUser, dataRepos},
})

const searchUserFailure = error => ({
    type: 'SEARCH_USER_FAILURE',
    payload: {
        error
    },
})
