import axios from 'axios';
import {apiUrl} from '../../config/constants';
import {
  appLoading, 
  appDoneLoading,
  showMessageWithTimeout
} from '../appState/actions';

export const ADD_NEW_TEAM = 'ADD_NEW_TEAM';
export const FETCH_ALL_TEAMS = 'FETCH_ALL_TEAMS';
export const DELETE_TEAM = 'DELETE_TEAM';

function allTeamsFetched(teams) {
  return {
    type: 'FETCH_ALL_TEAMS',
    payload: teams 
  };
}

export const fetchAllTeams = () => {
  return async(dispatch) => {
    dispatch(appLoading)
    try {
      const response = await axios.get(`${apiUrl}/teams`)
      dispatch(allTeamsFetched(response.data.teams));
    } catch(error) {
      console.log(error.message);
    }
    dispatch(appDoneLoading);
  }
}

const addNewTeam = (data) => {
  return {
    type: 'ADD_NEW_TEAM',
    payload: data
  }
};

export const addTeam = (name) => {
  return async (dispatch) => {
    const response = axios.post(`${apiUrl}/teams/createteam`,
    {
      name
    });
    dispatch(addNewTeam(response.data));
    dispatch(showMessageWithTimeout('Success!', false, 'Posted!', 3000));
    dispatch(appDoneLoading())
  }
};

export const deleteTeam = (team) => ({
  type: 'DELETE_TEAM',
  payload: team
});

export const deleteTeamSuccess = teamId => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.delete(`${apiUrl}/teams/deleteteam/${teamId}`)
      console.log('TEAM DELETED', response.data)
      dispatch(deleteTeam(teamId));
      //dispatch(fetchAllTeams());
    } catch(error) {
      console.log(error.message)
    };
  }
};