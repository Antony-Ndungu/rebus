import { SET_MERCHANT, NAVIGATE_DASHBOARD, LOGOUT_MERCHANT, CLOSE_SIDEBAR, SET_CUSTOMERS_NUMBER, SET_PAYMENTS_NUMBER, OPEN_SIDEBAR, RESET_PASSWORD_EMAIL_SENT_MESSAGE, RESET_PASSWORD_SET } from "../constants";

export default (state = { isAuthenticated: false, token: null, displaySidebar: false, dashboardNavigator: 0, paymentsNumber: 0, customersNumber: 0, passwordReset: { emailSent: false, message: null } }, action) => {
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
        case CLOSE_SIDEBAR:
            state = Object.assign({}, state, { displaySidebar: false });
            break;
        case OPEN_SIDEBAR:
            state = Object.assign({}, state, { displaySidebar: !state.displaySidebar });
            break;
        case NAVIGATE_DASHBOARD:
            state = Object.assign({}, state, { dashboardNavigator: action.payload });
            break;
        case SET_CUSTOMERS_NUMBER:
            state = Object.assign({}, state, { customersNumber: action.payload });
            break;
        case SET_PAYMENTS_NUMBER:
            state = Object.assign({}, state, { paymentsNumber: action.payload });
            break;
    }
    return state;
}