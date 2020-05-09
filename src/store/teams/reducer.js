import {ADD_NEW_TEAM} from '../teams/action';
import {DELETE_TEAM} from '../teams/action';
import {FETCH_ALL_TEAMS} from '../teams/action';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ALL_TEAMS:
      return [...action.payload];

    // Team is being added by name not by id so back end needs
    // to be updated to send ID as well as team name?
    
    // case ADD_NEW_TEAM:
    //   console.log('STATE', state)
    //   return [...state, action.payload];

    case DELETE_TEAM:
      const teamId = action.payload;
      const newTeams = state.filter(
        team => team.id !== teamId
      );
      return newTeams
    
    default:
        return state;
  }
}
