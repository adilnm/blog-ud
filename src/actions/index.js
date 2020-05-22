import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => dispatch({ type: "GET_POSTS", payload: posts }));
  };
};

export const fetchUser = userId => {
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(user => dispatch({ type: "GET_USER", payload: user }));
  };
};
