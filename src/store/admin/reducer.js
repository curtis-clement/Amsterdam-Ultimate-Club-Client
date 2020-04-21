// import {DELETE_TEAM} from '../admin/action';


const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    // case DELETE_TEAM:
    //   const teamId = action.payload;
    //   console.log('TEAMID', teamId)
      // state.teams is undefined --- can't filter on undefined
      // const newTeams = state.teams.filter(
      //   team => team.id !== teamId
      // );
      // console.log('NEW TEAMS', newTeams)
      // return {
      //   ...state
      // }
    
    default:
        return state;
  }
}
