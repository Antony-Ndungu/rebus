import axios from "axios";
import { SET_MERCHANT, LOGOUT_MERCHANT, RESET_MERCHANT_PASSWORD } from "../constants";

export const merchantLogin = (credentials) => {
    return dispatch => {
        return axios.post("/api/authenticate", credentials).then((response) => {
            console.log(response.data);
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

export const resetMerchantPassword = (data) => {
    return dispatch => {
        axios.post("/api/password-reset", data).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }
}