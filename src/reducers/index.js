import { combineReducers } from "redux";
import authReducer from "./auth";
import profileReducer from "./profile";
import routesReducer from "./routes";


export default combineReducers({ auth: authReducer, isProfileFilled: profileReducer,  routes: routesReducer});