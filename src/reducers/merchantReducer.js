import { SET_MERCHANT, LOGOUT_MERCHANT } from "../constants";

export default (state = { isAuthenticated: false, token: null, passwordResetEmailSent: false }, action) => {
    switch (action.type) {
        case SET_MERCHANT:
            state = Object.assign({}, state, { isAuthenticated: true, token: action.token });
            break;
        case LOGOUT_MERCHANT:
            state = Object.assign({}, ...state, { isAuthenticated: false, token: null });
            break;
    }
    return state;
}