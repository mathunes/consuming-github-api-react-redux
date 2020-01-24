const initialState = {
    loading: false,
    user: {},
    error: null
}

export default function searchUser(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_USER_STARTED':
            return {
                userData: action.userData,
                loading: true
            };
        case 'SEARCH_USER_SUCCESS':
            return {
                userData: action.userData,
                loading: false,
                error: null
            };
        case 'SEARCH_USER_FAILURE':
            return {
                userData: action.userData,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}