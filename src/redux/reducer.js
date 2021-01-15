
// initial State
const initialState = {
  username: '',
  email: '',
  isLoggedIn: false
};

// action constants - define the ways in which our state will be changed.
const LOGIN_USER = 'LOGIN_USER'; //This is a way to define a "constant variable" LOGIN_USER will only ever be the string 'LOGIN_USER'.


// action creators - functions that change the state.
export function loginUser(username, email) {
  return {
    type: LOGIN_USER, //what action is being dispatched? *Should answer the question: What are we doing?
    payload: { username, email } //the variable in the function (in our case username & email)
  };
};


// reducer function - the function that actually changes state
export default function reducer(state = initialState, action) {
  switch (action.type) { //we switched 'on' action.type; switch is like if/else; depending on the value of action.type we are going to do something different;
    case LOGIN_USER: //if case = LOGIN_USER { do this vvv}
      return { ...state, username: action.payload.username, email: action.payload.email, isLoggedIn: true };
    default:
      return state;
  }
}