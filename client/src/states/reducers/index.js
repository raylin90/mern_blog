import { combineReducers } from "redux";
import blogsReducer from './blogsReducer';
import errorsReducer from './errorsReducer';
import oneBlogReducer from './oneBlogReducer';
import authReducer from './authReducer';

// combine all states and reducers
const reducers = combineReducers({
    // store : reducer
    blogs: blogsReducer,
    oneBlog: oneBlogReducer,
    errors: errorsReducer,
    auth: authReducer,
})

export default reducers;