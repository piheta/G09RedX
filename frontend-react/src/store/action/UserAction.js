/**
 * Part of code taken from GitHub:
 * https://github.com/AleksNords/INTQTOOL-Frontend/blob/master/src/store/action/userAction.js
 *
 * The actions that can be performed by a user reducer.
 */

export function setUser(payload) {
    return {
        type: 'SET_USER',
        payload: payload
    }
}

export function removeUser() {
    return {
        type: 'REMOVE_USER'
    }
}