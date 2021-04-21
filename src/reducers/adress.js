import {GET_ADDRESS_LIST_FAILURE, GET_ADDRESS_LIST_SUCCESS, GET_ADDRESS_LIST} from '../actions';

const initialState = {
  list: [],
  error: '',
  isLoading:false,
};

export default function ( {state:{error:string, isLoading:boolean, list: []} = initialState, action})
 switch (action.type) {
   case GET_ADDRESS_LIST: {
     return {
       list: [], 
       error: '',
       isLoading: true,
     }
   }
   case GET_ADDRESS_LIST_SUCCESS: {
    return {
      list: action.payload, 
      error: '',
      isLoading: false,
    }
  }
  case GET_ADDRESS_LIST_FAILURE: {
    return {
      list: [], 
      error: action.payload,
      isLoading: false,
    }
  }
   default:
     return state;
 }