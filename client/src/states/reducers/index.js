import { combineReducers } from "redux";
import blogsReducer from './blogsReducer';
import errorsReducer from './errorsReducer';

const reducers = combineReducers({
    // store : reducer
    blogs: blogsReducer,
    errors: errorsReducer,
})

export default reducers;