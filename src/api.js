export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(res => res.json()).then(data => data.success);
};


export const serverGetAddressList = async() => {
  return fetch(
    'https://loft-taxi.glitch.me/addressList'
  ).then(res => res.json());
};

export const serverProfile = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch('https://loft-taxi.glitch.me/card', {
    method: 'POST',
    headers: {'Content-Type':'application/json;charset=utf-8'},
    body: JSON.stringify({cardNumber, expiryDate, cardName, cvc, token})
}
  ).then(res => res.json()).then(data => data.success);
};