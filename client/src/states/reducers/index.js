import { combineReducers } from "redux";
import blogsReducer from './blogsReducer';

const reducers = combineReducers({
    // store : reducer
    blogs: blogsReducer,
})

export default reducers;