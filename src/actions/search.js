import api from '../services/api.js';

export function searchUser(text) {
    api.get(`/${text}`)
        .then(response => {
            console.log(response);
        })

    return {
        type: 'SEARCH_USER',
    }
}