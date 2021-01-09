import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { changeColor } from "./modules/themeColor/reducer";

const reducers = combineReducers({
    color: changeColor,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
