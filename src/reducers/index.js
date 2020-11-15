import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; //We are simply renaming the reducer to formReducer so we know what reducer we're talking about.
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
