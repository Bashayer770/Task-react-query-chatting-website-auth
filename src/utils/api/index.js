import axios from "axios";
import { storage } from "../storage";

const instance = axios.create({
  // Add your backend url here
  baseURL: "https://task-react-axios-be.herokuapp.com",
});

instance.interceptors.request.use(
  function (config) {
    //Do something before request is sent
    const token = storage.getToken();
    if (token) {
      config.headers.authorization = `bearer ${token}`;
    }
    return config;
  },
  function (error) {
    //Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
