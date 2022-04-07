const initialState = {
    isLogged: false,
    jwToken: ""
};

const isLogged = (state = initialState, action) => {
    switch(action.type) {
        case "SET_LOGGED":
            let newState = {
                ...state,
                isLogged: action.payload.isLogged,
                jwToken: action.payload.jwToken
            }
            return newState;
        default: return state;
    }
};

export default isLogged;