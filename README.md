## Instructions:
1. Fork [this repo](https://github.com/JoinCODED/Task-react-chatting-website-auth)
2. Clone
3. `npm install`
4. `npm start`

### Part One : Setup 
1. npm install @tanstack/react-query axios react-query-auth
2. create your api file in src/utils/api/index.js
3. create the instance using 'axios.create'
4. create a new file called index.js in src/utils/auth and paste the following code in it.
```
// src/auth.js
import { configureAuth } from 'react-query-auth';
import api from '../api';

const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn: () => api.get('/me'),
  loginFn: (credentials) => api.post('/signin', credentials),
  registerFn: (credentials) => api.post('/signup', credentials),
  logoutFn: () => api.post('/signout'),
});

export { useUser, useLogin, useRegister, useLogout };
```
5. Don't forget to protect your App.js with Authloader

### Part Two: Sign up

1. in SignUpModal.js you have a form, complete the form
     * it should have two inputs : username and password
     * add handle change
     * complete handle submit
2. 


### Part Three: Sign in

1. create a component called SignInModal.js it should have a form
      * it should have two inputs : username and password
      * dont forget handle change
      * complete handle submit
2. create sign in method
3. create a set user method
4. call the sign in method in the modal

### Part Three : NavBar and Logout
1. if the user is logged in he/she should see her username in the navbar
2. add a Logout button in the navbar
3. add a Logout method 
4. call the logout method when the user clicks the logout button
5. make sure that if you refresh the user stayes logeed in


```js
Endpoints:

Signin:
Endpoint: https://coded-task-authentication-be.herokuapp.com/signin
POST
Data required: username,password

Signup:
Endpoint: https://coded-task-authentication-be.herokuapp.com/signup
POST
Data required: username,password

```
