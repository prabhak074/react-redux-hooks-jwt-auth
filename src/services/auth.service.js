import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};
const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      console.log("the response for sign in data ---",response.data.accessToken);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
// eslint-disable-next-line import/no-anonymous-default-export
const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;