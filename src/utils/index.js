import axios from "axios";

// FETCHING DATA

export const fetchPostData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const createPostData = (payload) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", payload);
};

export const editPostData = ({ id, payload }) => {
  return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, payload);
};

export const deletePostData = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

// FUNCTION HELPER
export const limitText = (input, limit) => {
  if (input.length > limit) {
    return input.substring(0, limit) + "...";
  }
  return input;
};
