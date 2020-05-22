import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts=()=>{
  return dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>console.log(posts))
  }
}