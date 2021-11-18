import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from 'redux-thunk';

import authReducer from './authReducer';
import postsReducer from './postsReducer';
import userReducer from './userReducer';
import appReducer from './appReducer';

const reducers = combineReducers({
   auth: authReducer,
   posts: postsReducer,
   user: userReducer,
   app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;