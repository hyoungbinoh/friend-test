import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";

import quiz from "./modules/quiz";
import user from "./modules/user";
import ranking from "./modules/ranking";

const middlewares = [thunk];
const rootReducer = combineReducers({quiz, user, ranking});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;