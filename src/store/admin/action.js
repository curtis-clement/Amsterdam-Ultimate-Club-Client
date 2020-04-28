import axios from 'axios';
import {apiUrl} from '../../config/constants';
import {fetchAllTeams} from '../teams/action';

export const DELETE_TEAM = 'DELETE_TEAM';
export const ADD_PLAYERTEAM = 'ADD_PLAYERTEAM'

const deleteTeam = team => ({
    type: 'DELETE_TEAM',
    payload: team
});

export const deleteTeamSuccess = teamId => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(`${apiUrl}/teams/deleteteam/${teamId}`)
      console.log('TEAM DELETED', response.data)
      // dispatch(deleteTeam(teamId));
      dispatch(fetchAllTeams());
    } catch(error) {
      console.log(error.message)
    };
  }
};

const addPlayerTeam = (team, player) => ({
  type: 'ADD_PLAYERTEAM',
  payload: team, player
})

export const updatePlayerTeam = (teamId, playerId) => {
  return async (dispatch) => {
    try {
      console.log('Dispatch is working')
    } catch(error) {
      console.log(error.message)
    };
  }
};
