import { combineReducers } from "redux";
import blogsReducer from './blogsReducer';
import errorsReducer from './errorsReducer';
import oneBlogReducer from './oneBlogReducer';

const reducers = combineReducers({
    // store : reducer
    blogs: blogsReducer,
    oneBlog: oneBlogReducer,
    errors: errorsReducer,
})

export default reducers;