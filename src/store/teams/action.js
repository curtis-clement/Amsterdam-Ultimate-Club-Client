import axios from 'axios';
import {apiUrl} from '../../config/constants';
import {appLoading, appDoneLoading} from '../appState/actions';

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
      dispatch(allTeamsFetched(response.data));
    } catch(error) {
      console.log(error.message);
    }
    dispatch(appDoneLoading);
  }
}