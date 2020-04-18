import axios from 'axios';
import {apiUrl} from '../../config/constants';
import {
  appLoading, 
  appDoneLoading,
  showMessageWithTimeout
} from '../appState/actions';

export const ADD_NEW_TEAM = 'ADD_NEW_TEAM';

function allTeamsFetched(teams) {
  return {
    type: 'FETCH_ALL_TEAMS',
    payload: teams 
  };
}

export const fetchAllTeams = () => {
  return async(dispatch, getState) => {
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
    type: ADD_NEW_TEAM,
    payload: data
  }
};

export const addTeam = (name) => {
  return async (dispatch, getState) => {
    const response = axios.post(`${apiUrl}/teams/createteam`,
    {
      name
    });
    dispatch(addNewTeam(response.data));
    dispatch(showMessageWithTimeout('Success!', false, 'Posted!', 3000));
    // dispatch(appDoneLoading())
  }
}