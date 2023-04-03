import { configureAuth } from "react-query-auth";
import instance from "../../api";
import axios from "../../api";
import { storage } from "../../storage";

const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth(
  {
    userFn: () => {
      // YOUR FUNCTION THAT GETS THE USER GOES HERE
    },
    loginFn: async (credentials) => {
      // YOU FUNCTION FOR LOGIN HERE
      let login = await instance.post("/signin", credentials);
      const token1 = login.data.token1;
      storage.setToken(token1);
    },
    registerFn: async (credentials) => {
      // YOUR FUNCTION FOR SIGNUP HERE
      let res = await instance.post("/signup", credentials);
      const token = res.data.token;
      storage.setToken(token);
    },
    logoutFn: () => {
      // YOUR FUNCTION FOR LOGOUT HERE
      storage.clearToken();
    },
  }
);
export { useUser, useLogin, useRegister, useLogout, AuthLoader };

//const res= usequery(["list"], ()=> ({data : "test"}));
