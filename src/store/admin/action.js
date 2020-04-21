import axios from 'axios';
import {apiUrl} from '../../config/constants';
import {fetchAllTeams} from '../teams/action';

export const DELETE_TEAM = 'DELETE_TEAM';

const deleteTeam = team => ({
    type: 'DELETE_TEAM',
    payload: team
});

export const deleteTeamSuccess = teamId => {
  return async (dispatch, getState) => {
    // console.log('DELETE TEAM SUCCESS', teamId)
    try {
      const response = await axios.delete(`${apiUrl}/teams/deleteteam/${teamId}`)
      console.log('TEAM DELETED', response.data)
      // dispatch(deleteTeam(teamId));
      dispatch(fetchAllTeams());
    } catch(error) {
      console.log(error.message)
    }
  }
}
