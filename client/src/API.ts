const url = "http://localhost:8000/api";

const API = {
  login: url + "/auth/login",
  register: url + "/auth/register",
  getAllPosts: url + "/post",
  createPost: url + "/post",
  getPost: url + "/post",
  addComment: url + "/comment",
};

export default API;
