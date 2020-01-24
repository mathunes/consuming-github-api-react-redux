export default function searchUser(state = [], action) {
    switch (action.type) {
        case 'SEARCH_USER':
            return [];
        default:
            return state;
    }
}