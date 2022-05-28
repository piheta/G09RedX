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