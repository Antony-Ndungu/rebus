import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { SET_MERCHANT } from "./constants";

let token = localStorage.getItem("token");
if(token){
    store.dispatch({
        type: SET_MERCHANT,
        token
    });
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById("app"));
