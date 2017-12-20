// state argurment is not the application state, its just the state that this
// reducer is responsible for. Its own state is passed back in as an argument.

export default function(state = null, action){
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
};
