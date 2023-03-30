import { configureAuth } from "react-query-auth";
import axios from "../../api";

const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth(
  {
    userFn: () => {
      // YOUR FUNCTION THAT GETS THE USER GOES HERE
    },
    loginFn: (credentials) => {
      // YOU FUNCTION FOR LOGIN HERE
      axios.post("/signin", credentials);
    },
    registerFn: (credentials) => {
      // YOUR FUNCTION FOR SIGNUP HERE
      axios.post("/signup", credentials);
    },
    logoutFn: () => {
      // YOUR FUNCTION FOR LOGOUT HERE
    },
  }
);
export { useUser, useLogin, useRegister, useLogout, AuthLoader };
