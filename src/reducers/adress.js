import {GET_ADDRESS } from '../actions';

const initialState = {
  coords: null
};

export default function (state = initialState, action) {
  switch (action.type) {
      case GET_ADDRESS: {
          return {
              ...state,
              coords: action.payload
          }
      }
      default:
          return state;
  }
}