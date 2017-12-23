import { combineReducers } from "redux";
import merchantReducer from "./merchantReducer";

export default combineReducers({
    merchant: merchantReducer
});