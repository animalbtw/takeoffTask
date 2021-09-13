import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {contactListReducer} from "./contactListReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  list: contactListReducer
})