import axios from 'axios';
import {apiUrl} from '../../config/constants';
import {appLoading, appDoneLoading} from '../appState/actions';

const allTeamsFetched = teams => {
  return {
    type: 'FETCH_ALL_TEAMS',
    payloard: teams 
  }
}

export const fetchAllTeams = () => {
  return async(dispatch, getState) => {
    dispatch(appLoading)
    try {
      const response = await axios.get(`${apiUrl}/teams`)
      dispatch(allTeamsFetched(response.data));
      console.log(response.data);
    } catch(error) {
      console.log(error.message);
    }
    dispatch(appDoneLoading);
  }
}