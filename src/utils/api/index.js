import axios from "axios";

const instance = axios.create({
  // Add your backend url here
  baseURL: "https://task-react-axios-be.herokuapp.com",
});

export default instance;
