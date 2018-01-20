import { SET_MERCHANT, NAVIGATE_DASHBOARD, START_FETCHING, STOP_FETCHING, LOGOUT_MERCHANT, SEARCH_PAYMENTS, SET_ACCOUNT_BALANCE, CLOSE_SIDEBAR, SET_CUSTOMERS_NUMBER, SET_PAYMENTS_NUMBER, OPEN_SIDEBAR, RESET_PASSWORD_EMAIL_SENT_MESSAGE, RESET_PASSWORD_SET } from "../constants";

export default (state = { isAuthenticated: false, token: null, fetching: false, payments: { docs: [], pages: 0 }, accountBalance: "0", displaySidebar: false, dashboardNavigator: 0, paymentsNumber: 0, customersNumber: 0, passwordReset: { emailSent: false, message: null } }, action) => {
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
        case SET_ACCOUNT_BALANCE:
            state = Object.assign({}, state, { accountBalance: action.payload });
            break;
        case SEARCH_PAYMENTS:
            state = Object.assign({}, state, { payments: action.payload });
            break;
        case START_FETCHING:
            state = Object.assign({}, state, { fetching: true });
            break;
            case STOP_FETCHING:
            state = Object.assign({}, state, { fetching: false });
    }
    return state;
}