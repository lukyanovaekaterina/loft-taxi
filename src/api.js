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

