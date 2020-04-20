import axios from 'axios';
import {apiUrl} from '../../config/constants';


export const DELETE_TEAM = 'DELETE_TEAM';

function deleteTeam(team) {
  return {
    type: 'DELETE_TEAM',
    payload: team
  };
}

export const deleteTeamSuccess = teamId => {
  return async (dispatch, getState) => {
    console.log('DELETE TEAM SUCCESS', teamId)
    try {
      const response = await axios.delete(`${apiUrl}/teams/deleteteam/${teamId}`)
      console.log('TEAM DELETED', response.data)
      dispatch(deleteTeam(teamId));
    } catch(error) {
      console.log(error.message)
    }
  }
}
