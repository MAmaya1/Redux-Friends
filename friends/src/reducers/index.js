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
    loginError: null,
    loadError: null
}

// Reducer Function

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loginError: null,
                fetchingFriends: false,
                loggingIn: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loginError: null,
                loggingIn: false
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loginError: 'Incorrect username and/or password',
                loggingIn: false
            }

        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
                loadError: null
            }

        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload,
                loadError: null
            }
        
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                loadError: action.payload
            }

        default:
            return state;
    }
}

export default reducer;