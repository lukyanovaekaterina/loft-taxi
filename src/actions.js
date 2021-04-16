

//Вход
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

//Платежные данные
export const SAVE_CARD = 'SAVE_CARD';
export const SAVE_CARD_SUCCESS='SAVE_CARD_SUCCESS';
export const GET_CARD = 'GET_CARD';
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCES';

export const saveCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SAVE_CARD,
  payload: {
    cardNumber, expiryDate, cardName, cvc, token
  },
});
export const saveCardSuccess = () => ({
  type: SAVE_CARD_SUCCESS,
});
export const getCard = (token) => ({
  type: GET_CARD, payload:{token}
});
export const getCardSuccess = () => ({
  type: GET_CARD_SUCCESS
});

//Список адресов

export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const GET_ADDRESS_LIST_SUCCESS = 'GET_ADDRESS_LIST_SUCCESS';
export const GET_ADDRESS_LIST_FAILURE = 'GET_ADDRESS_LIST_FAILURE';

export const getAddressList = () => ({
  type: GET_ADDRESS_LIST,
})

export const getAddressListSuccess = (token) => ({
type: GET_ADDRESS_LIST_SUCCESS,
payload: {token}
})

export const getAddressListFailure = (token) => ({
  type: GET_ADDRESS_LIST_FAILURE,
  payload: { token }
})