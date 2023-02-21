## Instructions:
1. Fork [this repo](https://github.com/JoinCODED/Task-react-chatting-website-auth)
2. Clone
3. `npm install`
4. `npm start`

### Part One : Sign up

1. in SignUpModal.js you have a form, complete the form
     * it should have two inputs : username and password
     * add handle change
     * complete handle submit
2. create a folder called stores
2. inside stores folder create an instance file to add your base Url
3. inside stores folder create authStore
4. `import { makeAutoObservable } from 'mobx';`
5. import the istance/api
6. create user = null
7. create a constructor
8. create sign up method
9. call it in sign up modal


### Part Two: Sign in

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
3. add a Logout methon in the authStore
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