import api from '../services/api.js';

export function searchUser(text) {
    api.get(`/${text}`)
        .then(response => {
            return {
                type: 'SEARCH_USER',
                userData: response.data,
            }
        })
        .catch(error => {
            return {
                type: 'SEARCH_USER',
                userData: null,
            }
        }) 
}