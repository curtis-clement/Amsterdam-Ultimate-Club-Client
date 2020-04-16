import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import teams from './teams/reducer';

export default combineReducers({
  appState,
  user,
  teams
});
