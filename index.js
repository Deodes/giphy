import { createStore } from "redux";

const gifs = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_GIFS_VALUE':
      return action.payload;
    
    case 'ZERO_OUT_GIFS_VALUE':
      return [];

    default: 
      return state;
  }
};

const store = createStore(gifs);

export default store;
