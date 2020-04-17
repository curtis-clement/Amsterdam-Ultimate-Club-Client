const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_ALL_USERS':
      return [...action.payload];
    
    default:
        return state;
  }
}