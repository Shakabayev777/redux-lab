import { combineReducers} from "redux";
import userReducer from './user.reducer';
import postReducer from './post.reducer';

const appReducers = combineReducers({
    user: userReducer,
    post: postReducer,
});
export default appReducers;
