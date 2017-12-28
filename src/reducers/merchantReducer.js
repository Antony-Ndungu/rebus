import { SET_MERCHANT, LOGOUT_MERCHANT, RESET_PASSWORD_EMAIL_SENT_MESSAGE, RESET_PASSWORD_SET } from "../constants";

export default (state = { isAuthenticated: false, token: null, passwordReset: { emailSent: false, message: null } }, action) => {
    switch (action.type) {
        case SET_MERCHANT:
            state = Object.assign({}, state, { isAuthenticated: true, token: action.token });
            break;
        case LOGOUT_MERCHANT:
            state = Object.assign({}, state, { isAuthenticated: false, token: null });
            break;
        case RESET_PASSWORD_EMAIL_SENT_MESSAGE:
            state = Object.assign({}, state, {
                passwordReset: Object.assign({}, ...state.passwordReset,
                    { emailSent: true, message: action.payload })
            });
            break;
        case RESET_PASSWORD_EMAIL_SENT_MESSAGE:
            state = Object.assign({}, state, {
                passwordReset: Object.assign({}, ...state.passwordReset,
                    { emailSent: false, message: null })
            });
            break;
    }
    return state;
}