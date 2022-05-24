import {combineReducers} from "redux";
import isLogged from "./IsLogged"
import userReducer from "./UserReducer";
export default combineReducers({
   isLogged,
   userReducer
});