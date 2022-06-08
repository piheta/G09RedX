/**
 * Part of code taken from GitHub:
 * https://github.com/AleksNords/INTQTOOL-Frontend/blob/master/src/store/reducer/isLoggedReducer.js
 *
 * A reducer to hold a boolean if someone is logged in or not.
 */

const initialState = {
    isLogged: false
};

const isLogged = (state = initialState, action) => {
    switch(action.type) {
        case "SET_LOGGED":
            let newState = {
                ...state,
                isLogged: action.payload.isLogged
            }
            return newState;
        default: return state;
    }
};

export default isLogged;