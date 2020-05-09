import {ADD_NEW_TEAM} from '../teams/action';
import {DELETE_TEAM} from '../teams/action';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_ALL_TEAMS':
      return [...action.payload];

    case ADD_NEW_TEAM:
      return []

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
