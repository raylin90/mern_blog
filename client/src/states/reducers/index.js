import { combineReducers } from "redux";
import blogsReducer from './blogsReducer';
import errorsReducer from './errorsReducer';
import oneBlogReducer from './oneBlogReducer';
import userReducer from './userReducer';

// combine all states and reducers
const reducers = combineReducers({
    // store : reducer
    blogs: blogsReducer,
    oneBlog: oneBlogReducer,
    errors: errorsReducer,
    user: userReducer,
})

export default reducers;