## Instructions:

1. Fork [this repo](https://github.com/JoinCODED/Task-react-chatting-website-auth)
2. Clone
3. `npm install`
4. `npm start`

### Part One : Setup

1. npm install @tanstack/react-query axios react-query-auth
2. create your api file in src/utils/api/index.js
3. create the instance using 'axios.create' in index.js

```JS
// src/utils/api/index.js
import axios from "axios";

const instance = axios.create({
  // Add your backend url here
  baseURL: "http://localhost:8000",
});

export default instance;
```

4. create a new file called index.js in src/utils/auth and paste the following code in it.

```JS
// src/utils/auth/index.js
import { configureAuth } from "react-query-auth";
import axios from "../api";

const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth(
  {
    userFn: () => {
      // YOUR FUNCTION THAT GETS THE USER GOES HERE
    },
    loginFn: (credentials) => {
      // YOU FUNCTION FOR LOGIN HERE
      axios.post("signin", credentials);
    },
    registerFn: (credentials) => {
      // YOUR FUNCTION FOR SIGNUP HERE
      axios.post("signup", credentials);
    },
    logoutFn: () => {
      // YOUR FUNCTION FOR LOGOUT HERE
    },
  }
);
export { useUser, useLogin, useRegister, useLogout, AuthLoader };
```

5. Dont forget to wrap your <App/> with QueryClientProvider in index.js

```JS
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

    // <QueryClientProvider client={queryClient}>
    //   <BrowserRouter>
    //     <App />
    //   </BrowserRouter>
    // </QueryClientProvider>
```

6. Don't forget to protect your App.js with Authloader

### Part Two: Sign up

1. in SignUpModal.js you have a form, complete the form
   - it should have two inputs : username and password
   - add handle change
   - complete handle submit

### Part Three: Sign in

1. create a component called SignInModal.js it should have a form
   - it should have two inputs : username and password
   - dont forget handle change
   - complete handle submit
2. create sign in method
3. create a set user method
4. call the sign in method in the modal

### Part Four : NavBar and Logout

1. if the user is logged in he/she should see her username in the navbar
2. add a Logout button in the navbar
3. add a Logout method
4. call the logout method when the user clicks the logout button
5. make sure that if you refresh the user stayes logeed in

## Endpoints:

| Title           | Method   | Endpoint                                                        | Data required                           |
| --------------- | -------- | --------------------------------------------------------------- | --------------------------------------- |
| LOGIN           | `POST`   | `https://task-react-axios-be.herokuapp.com/signin`              | `username`, `password`                  |
| REGISTER        | `POST`   | `https://task-react-axios-be.herokuapp.com/signup`              | `username`, `password`                  |
| Fetch all rooms | `GET`    | `https://task-react-axios-be.herokuapp.com/rooms/`              |                                         |
| Create a room   | `POST`   | `https://task-react-axios-be.herokuapp.com/rooms/`              | `title`, `image`, `description`, `slug` |
| Delete a room   | `DELETE` | `https://task-react-axios-be.herokuapp.com/rooms/${roomId}`     |                                         |
| Update a room   | `PUT`    | `https://task-react-axios-be.herokuapp.com/rooms/${roomId}`     | `title`, `image`, `description`, `slug` |
| Create a MSG    | `post`   | `https://task-react-axios-be.herokuapp.com/rooms/msg/${roomId}` | `msg`                                   |
