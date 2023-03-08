const url = "https://api.coincap.io/v2";

// primero estamos entrando a la url de 'assets', luego opteniendo una respuesta y guardandola en formato json.
// es importante usar return para poder acceder a la funcion .then() a traves de las 'promises'
// limit= 20 nos indica que solo se mostraremos 20 lineas con datos en nuestra tabla
function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

const getMarkets = async (coin) => {
  try {
    let res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
    res = await res.json();
    return res.data;
  } catch (error) {
    console.error("Error en el request");
  }
};

const getExchange = async (id) => {
  try {
    let res = await fetch(`${url}/exchanges/${id}`);
    res = await res.json();
    return res.data;
  } catch (error) {
    console.error("Error en el request");
  }
};

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory,
};
