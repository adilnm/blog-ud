import { combineReducers } from "redux";

export default combineReducers({
  posts,
  users
});

function posts(state = [], action) {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;

    default:
      return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
    case "GET_USER":
      return [...state,action.payload];
    default:
      return state;
  }
}
