
//Вход
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATION = "REGISTRATION";

export const logIn = (token) => {
 return { type: LOG_IN, payload: token}};
export const logOut = () => ({ type: LOG_OUT});

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

export const registration = (email, name, password) =>({
  type: REGISTRATION,
  payload: {email, name, password},
});


//Платежные данные
export const SAVE_CARD = 'SAVE_CARD';
export const SAVE_CARD_SUCCESS='SAVE_CARD_SUCCESS';
export const SAVE_CARD_FAILURE='SAVE_CARD_FAILURE';
export const GET_CARD = 'GET_CARD';
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCES';
export const GET_CARD_FAILURE='GET_CARD_FAILURE';

export const saveCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SAVE_CARD,
  payload: {
    cardNumber, expiryDate, cardName, cvc, token
  },
});

export const getCard = (token) => ({
  type: GET_CARD,
  payload: {token}
});

//Список адресов

export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const GET_ADDRESS = 'GET_ADDRESS';

export const getAddressList = (to, from) => ({
  type: GET_ADDRESS_LIST,
  payload: {to,from}
})

export const getAddress = (data) => {return {
type: GET_ADDRESS,
payload: data
}}


//Роут

export const ROUTES = "ROUTES";
export const SET_ROUTES = 'SET_ROUTES';

export const getRoutes = () => ({type: ROUTES})

export const routesAction = (data) => {
  return {type: SET_ROUTES, payload: data}
};