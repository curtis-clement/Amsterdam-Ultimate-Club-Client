import axios from 'axios';
import {apiUrl} from '../../config/constants';
import {fetchAllTeams} from '../teams/action';
import {
  appLoading, 
  appDoneLoading,
  showMessageWithTimeout
} from '../appState/actions';

export const ADD_PLAYERTEAM = 'ADD_PLAYERTEAM'

export const addPlayerTeam = (team, player) => ({
  type: 'ADD_PLAYERTEAM',
  payload: team, player
})

export const updatePlayerTeam = (teamId, userId) => {
  return async (dispatch) => {
    dispatch(appLoading)
    try {
      const response = await axios.post(`${apiUrl}/teams/${teamId}/add/${userId}`,
      {
        teamId,
        userId
      });
      dispatch(addPlayerTeam(response.data));
      dispatch(showMessageWithTimeout('Success!', false, 'Player Added', 2000));
      dispatch(appDoneLoading())
    } catch(error) {
      console.log(error.message)
    };
  }
};
