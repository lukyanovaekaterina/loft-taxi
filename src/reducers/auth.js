import { LOG_IN, LOG_OUT, REGISTRATION } from "../actions";

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return { isLoggedIn: true, token: action.payload };
    }
    case LOG_OUT: {
      return { isLoggedIn: false };
    }
    case REGISTRATION: {
      return { isLoggedIn: true, token: action.payload };
    }
    default:
      return state;
  }
}
