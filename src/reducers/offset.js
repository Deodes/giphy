const offset = (state = 0, action) => {
  switch(action.type) {
    case 'UPDATE_OFFSET_VALUE':
      return state + 15;
  
    case 'ZERO_OUT_OFFSET_VALUE': 
    return 0

    default:
      return state;
  }
};

export default offset;
