import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    //localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Refresh token
const refresh = async (userData) => {
  let logged_user = JSON.parse(localStorage.getItem("user"));
  const config = {
    headers: { Authorization: `Bearer ${logged_user.access_token}` },
  };
  const response = await axios.post(API_URL + "refresh", {}, config);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const updateProfile = async (userData) => {
  let logged_user = JSON.parse(localStorage.getItem("user"));
  const config = {
    headers: { Authorization: `Bearer ${logged_user.access_token}` },
  };
  const response = await axios.post(
    API_URL + "update-profile",
    userData,
    config
  );

  if (response.data) {
    //localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  updateProfile,
  refresh,
};

export default authService;
