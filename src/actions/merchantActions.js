import axios from "axios";
import io from "socket.io-client";
import { SET_MERCHANT, LOGOUT_MERCHANT, CLOSE_SIDEBAR, NAVIGATE_DASHBOARD,SET_PAYMENTS_NUMBER,SET_CUSTOMERS_NUMBER, OPEN_SIDEBAR,RESET_PASSWORD, RESET_PASSWORD_EMAIL_SENT_MESSAGE, RESET_PASSWORD_SET} from "../constants";

export const merchantLogin = (credentials) => {
    return dispatch => {
        return axios.post("/api/authenticate", credentials).then((response) => {
            if (response.data.errors) {
                return { errors: response.data.errors };
            }else if(response.data.confirmation === "fail"){
                return { errors: { global: response.data.message} }   
            }else if(response.data.confirmation === "success"){
                dispatch({
                    type: SET_MERCHANT,
                    token: response.data.token
                });
                localStorage.setItem("token", response.data.token);
                return { errors: {}}
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const merchantLogout = () => {
    localStorage.removeItem("token");
    return {
        type: LOGOUT_MERCHANT
    }
}

export const setCustomersNumber = (number) => {
    return {
        type: SET_CUSTOMERS_NUMBER,
        payload: number
    }
}

export const setPaymentsNumber = (number) => {
    return {
        type: SET_PAYMENTS_NUMBER,
        payload: number
    }
}

export const openSidebar = () => {
    return {
        type: OPEN_SIDEBAR
    }
}

export const closeSidebar = () => {
    return {
        type: CLOSE_SIDEBAR
    }
}

export const resetMerchantPassword = (data) => {
    return dispatch => {
        return axios.post("/api/password-reset", data).then((response) => {
            if(response.data.confirmation === "success"){
                dispatch({
                    type: RESET_PASSWORD_EMAIL_SENT_MESSAGE,
                    payload: response.data.message
                });
            }else if(response.data.confirmation === "fail"){
                return response.data.message
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const resetPassword = (data) => {
    return dispatch => {
        return axios.post("/api/reset-password", data);
    }
}

export const resetPasswordReset = () => {
    return {
        type: RESET_PASSWORD_SET
    }
}
export const navigateDashboard = (num) => {
    return {
        type: NAVIGATE_DASHBOARD,
        payload: num
    }
}
