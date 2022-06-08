/**
 * Part of code taken from GitHub:
 * https://github.com/AleksNords/INTQTOOL-Frontend/blob/master/src/store/reducer/userReducer.js
 *
 * A reducer to hold the state of which user is currently logged in.
 */

const initialState = {
    user: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            let newState = {
                ...state,
                user: action.payload.user
            };
            return newState;
        case 'REMOVE_USER':
            let newState2 = {
                user: {}
            };
            return newState2;
        default:
            return state;
    }
};

export default userReducer;