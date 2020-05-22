import { combineReducers } from "redux";

export default combineReducers({
  posts
});

function posts(state = [], action){
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;

    default:
      return state;
  }
};
