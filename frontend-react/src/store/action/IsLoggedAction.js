/**
 * Part of code taken from repository:
 * https://github.com/AleksNords/INTQTOOL-Frontend/blob/master/src/store/action/isLoggedAction.js
 *
 * Actions that can be performed on the isLogged reducer.
 */

export function setLoginStatus(payload) {
    return {
        type: "SET_LOGGED",
        payload: payload
    }
}