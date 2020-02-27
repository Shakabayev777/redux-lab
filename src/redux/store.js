import appReducers from '../redux/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';


export default createStore(
    appReducers,
    composeWithDevTools(applyMiddleware(thunk))
);
