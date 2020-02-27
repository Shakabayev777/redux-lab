import { combineReducers} from "redux";
import userReducer from './user.reducer'

const appReducers = combineReducers({
    user: userReducer,
});
export default appReducers;
