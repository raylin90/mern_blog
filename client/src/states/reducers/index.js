import { combineReducers } from "redux";
import blogsReducer from './blogsReducer';
import errorsReducer from './errorsReducer';
import oneBlogReducer from './oneBlogReducer';

// combine all states and reducers
const reducers = combineReducers({
    // store : reducer
    blogs: blogsReducer,
    oneBlog: oneBlogReducer,
    errors: errorsReducer,
})

export default reducers;