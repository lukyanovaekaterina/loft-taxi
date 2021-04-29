export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  )
    .then((res) => res.json())
    .then((data) => data.success);
};

export async function serverRegister(email, password, name) {
  const arr = name.split(" ");
  let surname = "";

  if (arr.length > 0) {
    surname = arr[1];
  }

  const url = "https://loft-taxi.glitch.me/register";
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => res.json());
}

export const serverGetAddressList = async () => {
  return fetch("https://loft-taxi.glitch.me/addressList"
  ).then((res) => res.json()).then(data => data.addresses);
};

export const serverProfile = async (
  cardNumber,
  expiryDate,
  cardName,
  cvc,
  token
) => {
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ cardNumber, expiryDate, cardName, cvc, token }),
  }).then((res) => res.json());
};

export const serverCard = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`).then((res) =>
    res.json()
  );
};

export const fetchRoute = async (from, to) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`
  ).then((res) => res.json());
};
