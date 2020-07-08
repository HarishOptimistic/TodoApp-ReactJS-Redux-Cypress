import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {composeWithDevTools} from 'redux-devtools-extension'

import todos from "./reducers/todoReducer";

export default createStore(
    combineReducers({
        todos
    }),
    composeWithDevTools(applyMiddleware(logger, thunk, promise))  
);