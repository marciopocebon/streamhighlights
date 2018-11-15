import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import adminsReducer from "./adminsReducer";
import streamersReducer from "./streamers/index";
import activityReducer from "./activity/index";
import clipsReducer from './clips/index';
import uiReducer from './ui/index'

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
  streamers: streamersReducer,
  activity: activityReducer,
  clips: clipsReducer,
  ui: uiReducer
});
