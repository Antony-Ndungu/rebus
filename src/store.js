import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk, logger);

export default createStore(reducers, composeWithDevTools(middleware));