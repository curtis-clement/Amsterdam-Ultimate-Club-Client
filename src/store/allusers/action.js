import axios from 'axios';
import {apiUrl} from '../../config/constants';
import {appLoading, appDoneLoading} from '../appState/actions';

function allUsersFetched(allusers) {
  return {
    type: 'FETCH_ALL_USERS',
    payload: allusers
  };
}

export const fetchAllUsers = () => {
  return async(dispatch, getState) => {
    dispatch(appLoading)
    try {
      const response = await axios.get(`${apiUrl}/users`)
      dispatch(allUsersFetched(response.data.users));
    } catch(error) {
      console.log(error.message);
    }
    dispatch(appDoneLoading);
  }
}