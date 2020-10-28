const inputValue = (state = '', action) => {
  switch(action.type){
    case 'UPDATE_INPUT_VALUE':
      return action.text;
    
    case 'ZERO_OUT_INPUT_VALUE':
      return '';

    default: 
      return state;
  }
};

export default inputValue;