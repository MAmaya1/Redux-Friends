import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE
} from '../actions';

// Set Initial State

const initialState = {
    friends: [],
    loggingIn: false,
    fetchingFriends: false,
    error: null
}

// Reducer Function

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
                error: null
            }

        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload,
                error: null
            }
        
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;