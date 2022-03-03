import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

// Register user
const sendMsg = async (userData) => {
  const response = await axios.post(API_URL + "contact-us", userData);

  if (response.data) {
    //localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
  }

  return response.data;
};

const msgService = {
  sendMsg,
};

export default msgService;
